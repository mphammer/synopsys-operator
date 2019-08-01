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
	"strings"

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

// AlertConfigmap holds the Alert config map configuration
type AlertConfigmap struct {
	config     *protoform.Config
	kubeClient *kubernetes.Clientset
	alert      *alertapi.Alert
}

func init() {
	store.Register(types.AlertConfigmapV1, NewAlertConfigmap)
}

// NewAlertConfigmap returns the Alert config map configuration
func NewAlertConfigmap(config *protoform.Config, kubeClient *kubernetes.Clientset, cr interface{}) (types.ConfigMapInterface, error) {
	alert, ok := cr.(*alertapi.Alert)
	if !ok {
		return nil, fmt.Errorf("unable to cast the interface to Black Duck object")
	}
	return &AlertConfigmap{config: config, kubeClient: kubeClient, alert: alert}, nil
}

// GetCM returns the config map
func (a *AlertConfigmap) GetCM() (*components.ConfigMap, error) {
	return a.getAlertConfigMap(), nil
}

// getAlertConfigMap returns a new ConfigMap for an Alert
func (a *AlertConfigmap) getAlertConfigMap() *components.ConfigMap {
	configMap := components.NewConfigMap(horizonapi.ConfigMapConfig{
		Name:      utils.GetResourceName(a.alert.Name, util.AlertName, "blackduck-config"),
		Namespace: a.alert.Spec.Namespace,
	})

	configMapData := map[string]string{}
	// Add Black Duck CFSSL host
	if *a.alert.Spec.StandAlone {
		configMapData["HUB_CFSSL_HOST"] = utils.GetResourceName(a.alert.Name, util.AlertName, "cfssl")
	}

	// Add Environs
	for _, environ := range a.alert.Spec.Environs {
		vals := strings.Split(environ, ":")
		if len(vals) != 2 {
			continue
		}
		environKey := strings.TrimSpace(vals[0])
		environVal := strings.TrimSpace(vals[1])
		configMapData[environKey] = environVal
	}

	// Add data to the ConfigMap
	configMap.AddData(configMapData)

	configMap.AddLabels(map[string]string{"app": util.AlertName, "name": a.alert.Name, "component": "alert"})

	return configMap
}
