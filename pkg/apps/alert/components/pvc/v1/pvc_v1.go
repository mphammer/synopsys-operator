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
	operatorutil "github.com/blackducksoftware/synopsys-operator/pkg/util"
	"k8s.io/client-go/kubernetes"
)

// AlertPVC holds the Alert PVC configuration
type AlertPVC struct {
	config     *protoform.Config
	kubeClient *kubernetes.Clientset
	alert      *alertapi.Alert
}

func init() {
	store.Register(types.AlertPVCV1, NewAlertPvc)
}

// NewAlertPvc returns the Alert PVC configuration
func NewAlertPvc(config *protoform.Config, kubeClient *kubernetes.Clientset, cr interface{}) (types.PVCInterface, error) {
	alert, ok := cr.(*alertapi.Alert)
	if !ok {
		return nil, fmt.Errorf("unable to cast the interface to Black Duck object")
	}
	return &AlertPVC{config: config, kubeClient: kubeClient, alert: alert}, nil
}

// GetPVCs returns the PVC
func (a *AlertPVC) GetPVCs() ([]*components.PersistentVolumeClaim, error) {
	if !a.alert.Spec.PersistentStorage {
		return nil, nil
	}
	pvc, err := a.getAlertPersistentVolumeClaim()
	if err != nil {
		return nil, err
	}
	return []*components.PersistentVolumeClaim{pvc}, nil
}

// getAlertPersistentVolumeClaim returns a new PVC for an Alert
func (a *AlertPVC) getAlertPersistentVolumeClaim() (*components.PersistentVolumeClaim, error) {

	name := utils.GetResourceName(a.alert.Name, operatorutil.AlertName, a.alert.Spec.PVCName)
	if a.alert.Annotations["synopsys.com/created.by"] == "pre-2019.6.0" {
		name = a.alert.Spec.PVCName
	}

	pvc, err := operatorutil.CreatePersistentVolumeClaim(name, a.alert.Spec.Namespace, a.alert.Spec.PVCSize, a.alert.Spec.PVCStorageClass, horizonapi.ReadWriteOnce)
	if err != nil {
		return nil, fmt.Errorf("failed to create the PVC %s in namespace %s because %+v", name, a.alert.Spec.Namespace, err)
	}

	pvc.AddLabels(map[string]string{"app": util.AlertName, "name": a.alert.Name, "component": "alert"})
	return pvc, nil
}
