package v1

import (
	"fmt"
	horizonapi "github.com/blackducksoftware/horizon/pkg/api"
	"github.com/blackducksoftware/horizon/pkg/components"
	blackduckapi "github.com/blackducksoftware/synopsys-operator/pkg/api/blackduck/v1"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/blackduck/components/rc/utils"
	utils2 "github.com/blackducksoftware/synopsys-operator/pkg/apps/blackduck/components/utils"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/blackduck/types"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/store"
	apputils "github.com/blackducksoftware/synopsys-operator/pkg/apps/utils"
	"github.com/blackducksoftware/synopsys-operator/pkg/protoform"
	"github.com/blackducksoftware/synopsys-operator/pkg/util"

	"k8s.io/client-go/kubernetes"
)

type BdReplicationController struct {
	*types.ReplicationController
	config     *protoform.Config
	kubeClient *kubernetes.Clientset
	blackduck  *blackduckapi.Blackduck
}

func init() {
	store.Register(types.RcScanV1, NewBdReplicationController)
}

func (c *BdReplicationController) GetRc() (*components.ReplicationController, error) {

	containerConfig, ok := c.Containers[types.ScanContainerName]
	if !ok {
		return nil, fmt.Errorf("couldn't find container %s", types.ScanContainerName)
	}

	if containerConfig.MaxMem == nil {
		return nil, fmt.Errorf("Maxmem must be set for %s", types.ScanContainerName)
	}

	scannerEnvs := []*horizonapi.EnvConfig{utils.GetHubConfigEnv(c.blackduck.Name), utils.GetHubDBConfigEnv(c.blackduck.Name)}
	scannerEnvs = append(scannerEnvs, &horizonapi.EnvConfig{Type: horizonapi.EnvVal, NameOrPrefix: "HUB_MAX_MEMORY", KeyOrVal: fmt.Sprintf("%dM", *containerConfig.MaxMem-512)})
	hubScanEmptyDir, _ := util.CreateEmptyDirVolumeWithoutSizeLimit("dir-scan")
	hubScanContainerConfig := &util.Container{
		ContainerConfig: &horizonapi.ContainerConfig{Name: "scan", Image: containerConfig.Image, PullPolicy: horizonapi.PullAlways},
		EnvConfigs:      scannerEnvs,
		VolumeMounts: []*horizonapi.VolumeMountConfig{
			{
				Name:      "db-passwords",
				MountPath: "/tmp/secrets/HUB_POSTGRES_ADMIN_PASSWORD_FILE",
				SubPath:   "HUB_POSTGRES_ADMIN_PASSWORD_FILE",
			},
			{
				Name:      "db-passwords",
				MountPath: "/tmp/secrets/HUB_POSTGRES_USER_PASSWORD_FILE",
				SubPath:   "HUB_POSTGRES_USER_PASSWORD_FILE",
			},
			{
				Name:      "dir-scan",
				MountPath: "/opt/blackduck/hub/hub-scan/security",
			},
		},
		PortConfig: []*horizonapi.PortConfig{{ContainerPort: int32(8443), Protocol: horizonapi.ProtocolTCP}},
	}

	utils2.SetLimits(hubScanContainerConfig.ContainerConfig, containerConfig)

	if c.blackduck.Spec.LivenessProbes {
		hubScanContainerConfig.LivenessProbeConfigs = []*horizonapi.ProbeConfig{{
			ActionConfig: horizonapi.ActionConfig{
				Type: horizonapi.ActionTypeCommand,
				Command: []string{
					"/usr/local/bin/docker-healthcheck.sh",
					"https://127.0.0.1:8443/api/health-checks/liveness",
					"/opt/blackduck/hub/hub-scan/security/root.crt",
					"/opt/blackduck/hub/hub-scan/security/blackduck_system.crt",
					"/opt/blackduck/hub/hub-scan/security/blackduck_system.key",
				},
			},
			Delay:           240,
			Interval:        30,
			Timeout:         10,
			MinCountFailure: 10,
		}}
	}

	hubScanVolumes := []*components.Volume{hubScanEmptyDir, utils.GetDBSecretVolume(c.blackduck.Name)}

	// Mount the HTTPS proxy certificate if provided
	if len(c.blackduck.Spec.ProxyCertificate) > 0 {
		hubScanContainerConfig.VolumeMounts = append(hubScanContainerConfig.VolumeMounts, &horizonapi.VolumeMountConfig{
			Name:      "proxy-certificate",
			MountPath: "/tmp/secrets/HUB_PROXY_CERT_FILE",
			SubPath:   "HUB_PROXY_CERT_FILE",
		})
		hubScanVolumes = append(hubScanVolumes, utils.GetProxyVolume(c.blackduck.Name))
	}

	podConfig := &util.PodConfig{
		Volumes:             hubScanVolumes,
		Containers:          []*util.Container{hubScanContainerConfig},
		ImagePullSecrets:    c.blackduck.Spec.RegistryConfiguration.PullSecrets,
		Labels:              apputils.GetVersionLabel("scan", c.blackduck.Name, c.blackduck.Spec.Version),
		NodeAffinityConfigs: utils.GetNodeAffinityConfigs("scan", &c.blackduck.Spec),
	}
	if !c.config.IsOpenshift {
		podConfig.FSGID = util.IntToInt64(0)
	}

	return util.CreateReplicationControllerFromContainer(
		&horizonapi.ReplicationControllerConfig{Namespace: c.blackduck.Spec.Namespace, Name: apputils.GetResourceName(c.blackduck.Name, util.BlackDuckName, "scan"), Replicas: util.IntToInt32(c.Replicas)},
		podConfig, apputils.GetLabel("scan", c.blackduck.Name))
}

func NewBdReplicationController(replicationController *types.ReplicationController, config *protoform.Config, kubeClient *kubernetes.Clientset, blackduck *blackduckapi.Blackduck) types.ReplicationControllerInterface {
	return &BdReplicationController{ReplicationController: replicationController, config: config, kubeClient: kubeClient, blackduck: blackduck}
}