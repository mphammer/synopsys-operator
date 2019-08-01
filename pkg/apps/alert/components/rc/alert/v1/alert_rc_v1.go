/*
Copyright (C) 2019 Synopsys, Inc.

Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements. See the NOTICE file
distributed with this work for additional information
regarding copyright ownershia. The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied. See the License for the
specific language governing permissions and limitations
under the License.
*/

package v1

import (
	"fmt"

	horizonapi "github.com/blackducksoftware/horizon/pkg/api"
	"github.com/blackducksoftware/horizon/pkg/components"
	alertapi "github.com/blackducksoftware/synopsys-operator/pkg/api/alert/v1"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/store"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/types"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/utils"
	"github.com/blackducksoftware/synopsys-operator/pkg/protoform"
	"github.com/blackducksoftware/synopsys-operator/pkg/util"
	"github.com/juju/errors"
	"k8s.io/client-go/kubernetes"
)

// AlertReplicationController holds the Alert RC configuration
type AlertReplicationController struct {
	*types.PodResource
	config     *protoform.Config
	kubeClient *kubernetes.Clientset
	alert      *alertapi.Alert
}

func init() {
	store.Register(types.AlertRCV1, NewAlertReplicationController)
}

// NewAlertReplicationController returns the Alert RC configuration
func NewAlertReplicationController(replicationController *types.PodResource, config *protoform.Config, kubeClient *kubernetes.Clientset, cr interface{}) (types.ReplicationControllerInterface, error) {
	alert, ok := cr.(*alertapi.Alert)
	if !ok {
		return nil, fmt.Errorf("unable to cast the interface to an Alert object")
	}
	return &AlertReplicationController{PodResource: replicationController, config: config, kubeClient: kubeClient, alert: alert}, nil
}

// GetRc returns the RC
func (a *AlertReplicationController) GetRc() (*components.ReplicationController, error) {
	return a.getAlertReplicationController()
}

// getAlertReplicationController returns a new replication controller for an Alert
func (a *AlertReplicationController) getAlertReplicationController() (*components.ReplicationController, error) {
	replicas := int32(1)
	replicationController := components.NewReplicationController(horizonapi.ReplicationControllerConfig{
		Replicas:  &replicas,
		Name:      utils.GetResourceName(a.alert.Name, util.AlertName, "alert"),
		Namespace: a.alert.Spec.Namespace,
	})
	replicationController.AddSelectors(map[string]string{"app": util.AlertName, "name": a.alert.Name, "component": "alert"})

	pod, err := a.getAlertPod()
	if err != nil {
		return nil, fmt.Errorf("failed to create Alert Pod: %s", err)
	}

	replicationController.AddPod(pod)
	replicationController.AddLabels(map[string]string{"app": util.AlertName, "name": a.alert.Name, "component": "alert"})
	return replicationController, nil
}

// getAlertPod returns a new Pod for an Alert
func (a *AlertReplicationController) getAlertPod() (*components.Pod, error) {
	pod := components.NewPod(horizonapi.PodConfig{
		Name: utils.GetResourceName(a.alert.Name, util.AlertName, "alert"),
	})
	pod.AddLabels(map[string]string{"app": util.AlertName, "name": a.alert.Name, "component": "alert"})

	container, err := a.getAlertContainer()
	if err != nil {
		return nil, err
	}
	pod.AddContainer(container)

	if a.alert.Spec.PersistentStorage {
		pod.AddVolume(a.getAlertPVCVolume())
	} else {
		vol, err := a.getAlertEmptyDirVolume()
		if err != nil {
			return nil, fmt.Errorf("failed to Add Volume to Alert Pod: %s", err)
		}
		pod.AddVolume(vol)
	}

	pod.AddLabels(map[string]string{"app": util.AlertName, "name": a.alert.Name, "component": "alert"})
	return pod, nil
}

// getAlertContainer returns a new Container for an Alert
func (a *AlertReplicationController) getAlertContainer() (*components.Container, error) {
	containerConfig, ok := a.Containers[types.AlertContainerName]
	if !ok {
		return nil, fmt.Errorf("couldn't find container %s", types.AlertContainerName)
	}
	image := containerConfig.Image
	container, err := components.NewContainer(horizonapi.ContainerConfig{
		Name:       "alert",
		Image:      image,
		PullPolicy: horizonapi.PullAlways,
		MinMem:     a.alert.Spec.AlertMemory,
		MaxMem:     a.alert.Spec.AlertMemory,
	})

	if err != nil {
		return nil, fmt.Errorf("%s", err)
	}

	container.AddPort(horizonapi.PortConfig{
		ContainerPort: *a.alert.Spec.Port,
		Protocol:      horizonapi.ProtocolTCP,
	})

	err = container.AddVolumeMount(horizonapi.VolumeMountConfig{
		Name:      "dir-alert",
		MountPath: "/opt/blackduck/alert/alert-config",
	})
	if err != nil {
		return nil, errors.Trace(err)
	}

	container.AddEnv(horizonapi.EnvConfig{
		Type:     horizonapi.EnvFromConfigMap,
		FromName: utils.GetResourceName(a.alert.Name, util.AlertName, "blackduck-config"),
	})

	container.AddEnv(horizonapi.EnvConfig{
		Type:     horizonapi.EnvFromSecret,
		FromName: utils.GetResourceName(a.alert.Name, util.AlertName, "secret"),
	})

	container.AddLivenessProbe(horizonapi.ProbeConfig{
		ActionConfig: horizonapi.ActionConfig{
			Type:    horizonapi.ActionTypeCommand,
			Command: []string{"/usr/local/bin/docker-healthcheck.sh", "https://localhost:8443/alert/api/about"},
		},
		Delay:           240,
		Timeout:         10,
		Interval:        30,
		MinCountFailure: 5,
	})

	return container, nil
}

// getAlertEmptyDirVolume returns a new EmptyDirVolume for an Alert
func (a *AlertReplicationController) getAlertEmptyDirVolume() (*components.Volume, error) {
	vol, err := components.NewEmptyDirVolume(horizonapi.EmptyDirVolumeConfig{
		VolumeName: "dir-alert",
		Medium:     horizonapi.StorageMediumDefault,
	})
	if err != nil {
		return nil, fmt.Errorf("failed to create Alert EmptyDir: %s", err)
	}

	return vol, err
}

// getAlertPVCVolume returns a new PVCVolume for an Alert
func (a *AlertReplicationController) getAlertPVCVolume() *components.Volume {
	name := utils.GetResourceName(a.alert.Name, util.AlertName, a.alert.Spec.PVCName)
	if a.alert.Annotations["synopsys.com/created.by"] == "pre-2019.6.0" {
		name = a.alert.Spec.PVCName
	}

	vol := components.NewPVCVolume(horizonapi.PVCVolumeConfig{
		VolumeName: "dir-alert",
		PVCName:    name,
		ReadOnly:   false,
	})

	return vol
}
