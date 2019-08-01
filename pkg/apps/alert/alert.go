/*
Copyright (C) 2019 Synopsys, Inc.

Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements. See the NOTICE file
distributed with this work for additional information
regarding copyright ownership. The ASF licenses this file
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

package alert

import (
	"fmt"
	"sort"
	"strings"

	"github.com/blackducksoftware/synopsys-operator/pkg/api"
	alertapi "github.com/blackducksoftware/synopsys-operator/pkg/api/alert/v1"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/store"
	"github.com/blackducksoftware/synopsys-operator/pkg/crdupdater"
	"github.com/blackducksoftware/synopsys-operator/pkg/protoform"
	sizeclientset "github.com/blackducksoftware/synopsys-operator/pkg/size/client/clientset/versioned"
	"github.com/blackducksoftware/synopsys-operator/pkg/util"
	log "github.com/sirupsen/logrus"
)

// Constants for each unit of a deployment of Alert
const (
	CRDResources = "ALERT"
	PVCResources = "PVC"
)

// Alert is used to handle Alerts in the cluster
type Alert struct {
	protoformDeployer *protoform.Deployer
	sizeClient        *sizeclientset.Clientset
}

// NewAlert will return an Alert type
func NewAlert(protoformDeployer *protoform.Deployer) *Alert {
	sizeClient, err := sizeclientset.NewForConfig(protoformDeployer.KubeConfig)
	if err != nil {
		return nil
	}
	return &Alert{
		protoformDeployer: protoformDeployer,
		sizeClient:        sizeClient,
	}
}

func (a *Alert) ensureVersion(alt *alertapi.Alert) error {
	versions := a.Versions()
	// If the version is not provided, then we set it to be the latest
	if len(alt.Spec.Version) == 0 {
		sort.Sort(sort.Reverse(sort.StringSlice(versions)))
		alt.Spec.Version = versions[0]
	} else {
		// If the verion is provided, check that it's supported
		for _, v := range versions {
			if strings.Compare(v, alt.Spec.Version) == 0 {
				return nil
			}
		}
		return fmt.Errorf("version '%s' is not supported.  Supported versions: %s", alt.Spec.Version, strings.Join(a.Versions(), ", "))
	}
	return nil
}

// Delete will delete the Alert from the cluster (all Alerts are deleted the same way)
func (a *Alert) Delete(name string) error {
	log.Debugf("deleting Alert '%s'", name)
	values := strings.SplitN(name, "/", 2)
	var namespace string
	if len(values) == 0 {
		return fmt.Errorf("invalid name to delete the Alert instance")
	} else if len(values) == 1 {
		name = values[0]
		namespace = values[0]
		ns, err := util.ListNamespaces(a.protoformDeployer.KubeClient, fmt.Sprintf("synopsys.com/%s.%s", util.AlertName, name))
		if err != nil {
			log.Errorf("unable to list %s Alert instance namespaces %s due to %+v", name, namespace, err)
		}
		if len(ns.Items) > 0 {
			namespace = ns.Items[0].Name
		} else {
			return fmt.Errorf("unable to find %s Alert instance namespace", name)
		}
	} else {
		name = values[1]
		namespace = values[0]
	}

	// delete an Alert instance
	commonConfig := crdupdater.NewCRUDComponents(a.protoformDeployer.KubeConfig, a.protoformDeployer.KubeClient, a.protoformDeployer.Config.DryRun, false, namespace, "",
		&api.ComponentList{}, fmt.Sprintf("app=%s,name=%s", util.AlertName, name), false)
	_, crudErrors := commonConfig.CRUDComponents()
	if len(crudErrors) > 0 {
		return fmt.Errorf("unable to delete the %s Alert instance in %s namespace due to %+v", name, namespace, crudErrors)
	}

	var err error
	// if cluster scope, if no other instance running in Synopsys Operator namespace, delete the namespace or delete the Synopsys labels in the namespace
	if a.protoformDeployer.Config.IsClusterScoped {
		err = util.DeleteResourceNamespace(a.protoformDeployer.KubeClient, util.AlertName, namespace, name, false)
	} else {
		// if namespace scope, delete the label from the namespace
		_, err = util.CheckAndUpdateNamespace(a.protoformDeployer.KubeClient, util.AlertName, namespace, name, "", true)
	}
	if err != nil {
		return err
	}

	return nil
}

// Versions returns the versions that the operator supports for Alert
func (a *Alert) Versions() []string {
	var versions []string
	// Get versions that each Creater supports
	for v := range publicVersions {
		versions = append(versions, v)
	}
	return versions
}

// Ensure will get the necessary Creater and make sure the instance
// is correctly deployed or deploy it if needed
func (a *Alert) Ensure(alert *alertapi.Alert) error {
	// If the version is not specified then we set it to be the latest.
	if err := a.ensureVersion(alert); err != nil {
		return err
	}
	version, ok := publicVersions[alert.Spec.Version]
	if !ok {
		return fmt.Errorf("version '%s' is not supported", alert.Spec.Version)
	}
	// Get the Alert Components
	cpList, err := store.GetComponents(version, a.protoformDeployer.Config, a.protoformDeployer.KubeClient, a.sizeClient, alert)
	if err != nil {
		return err
	}
	if strings.EqualFold(alert.Spec.DesiredState, "STOP") {
		commonConfig := crdupdater.NewCRUDComponents(a.protoformDeployer.KubeConfig, a.protoformDeployer.KubeClient, a.protoformDeployer.Config.DryRun, false, alert.Spec.Namespace, alert.Spec.Version,
			&api.ComponentList{PersistentVolumeClaims: cpList.PersistentVolumeClaims}, fmt.Sprintf("app=%s,name=%s", util.AlertName, alert.Name), false)
		_, errors := commonConfig.CRUDComponents()
		if len(errors) > 0 {
			return fmt.Errorf("unable to stop Alert: %+v", errors)
		}
	} else {
		// Update components in cluster
		commonConfig := crdupdater.NewCRUDComponents(a.protoformDeployer.KubeConfig, a.protoformDeployer.KubeClient, a.protoformDeployer.Config.DryRun, false, alert.Spec.Namespace, alert.Spec.Version,
			cpList, fmt.Sprintf("app=%s,name=%s", util.AlertName, alert.Name), false)
		_, errors := commonConfig.CRUDComponents()
		if len(errors) > 0 {
			return fmt.Errorf("unable to update Alert components due to %+v", errors)
		}
	}
	return nil
}

// GetComponents gets the necessary creater and returns the Alert's components
func (a *Alert) GetComponents(alt *alertapi.Alert, compType string) (*api.ComponentList, error) {
	// If the version is not specified then we set it to be the latest.
	if err := a.ensureVersion(alt); err != nil {
		return nil, err
	}

	version, ok := publicVersions[alt.Spec.Version]
	if !ok {
		return nil, fmt.Errorf("version '%s' is not supported", alt.Spec.Version)
	}

	cp, err := store.GetComponents(version, a.protoformDeployer.Config, a.protoformDeployer.KubeClient, a.sizeClient, alt)
	if err != nil {
		return nil, err
	}

	switch strings.ToUpper(compType) {
	case CRDResources:
		return cp.Filter("component notin (postgres, pvc)")
	case PVCResources:
		return cp.Filter("component in (pvc)")
	}
	return nil, fmt.Errorf("invalid components type '%s'", compType)
}
