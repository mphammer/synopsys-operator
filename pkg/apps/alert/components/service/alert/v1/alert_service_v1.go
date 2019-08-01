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
	"k8s.io/client-go/kubernetes"
)

// AlertService holds the Black Duck service configuration
type AlertService struct {
	config     *protoform.Config
	kubeClient *kubernetes.Clientset
	alert      *alertapi.Alert
}

func init() {
	store.Register(types.AlertServiceV1, NewAlertService)
}

// NewAlertService returns the Alert service configuration
func NewAlertService(config *protoform.Config, kubeClient *kubernetes.Clientset, cr interface{}) (types.ServiceInterface, error) {
	alert, ok := cr.(*alertapi.Alert)
	if !ok {
		return nil, fmt.Errorf("unable to cast the interface to Alert object")
	}
	return &AlertService{config: config, kubeClient: kubeClient, alert: alert}, nil
}

// GetService returns the service
func (a *AlertService) GetService() (*components.Service, error) {
	return a.getAlertClusterService(), nil
}

// getAlertClusterService returns a new cluster Service for an Alert
func (a *AlertService) getAlertClusterService() *components.Service {
	return util.CreateService(
		utils.GetResourceName(a.alert.Name, util.AlertName, "alert"),
		a.getLabel("alert"),
		a.alert.Spec.Namespace,
		int32(*a.alert.Spec.Port),
		int32(*a.alert.Spec.Port),
		horizonapi.ServiceTypeServiceIP,
		a.getLabel("alert"),
	)
}

func (a *AlertService) getLabel(name string) map[string]string {
	return map[string]string{
		"app":       util.AlertName,
		"name":      a.alert.Name,
		"component": name,
	}
}
