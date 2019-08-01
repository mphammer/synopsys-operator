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
	"strings"

	"github.com/blackducksoftware/synopsys-operator/pkg/api"
	alertapi "github.com/blackducksoftware/synopsys-operator/pkg/api/alert/v1"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/store"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/types"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/utils"
	"github.com/blackducksoftware/synopsys-operator/pkg/protoform"
	"github.com/blackducksoftware/synopsys-operator/pkg/util"
	routev1 "github.com/openshift/api/route/v1"
	"k8s.io/client-go/kubernetes"
)

// AlertRoute holds the Alert route configuration
type AlertRoute struct {
	config     *protoform.Config
	kubeClient *kubernetes.Clientset
	alert      *alertapi.Alert
}

func init() {
	store.Register(types.AlertRouteV1, NewAlertRoute)
}

// NewAlertRoute returns the Black Duck secret configuration
func NewAlertRoute(config *protoform.Config, kubeClient *kubernetes.Clientset, cr interface{}) (types.RouteInterface, error) {
	alert, ok := cr.(*alertapi.Alert)
	if !ok {
		return nil, fmt.Errorf("unable to cast the interface to Alert object")
	}
	return &AlertRoute{config: config, kubeClient: kubeClient, alert: alert}, nil
}

// GetRoute returns the route
func (a *AlertRoute) GetRoute() (*api.Route, error) {
	if strings.ToUpper(a.alert.Spec.ExposeService) == util.OPENSHIFT {
		return a.getOpenShiftRoute(), nil
	}
	return nil, nil
}

// getOpenShiftRoute creates the OpenShift route component for the alert
func (a *AlertRoute) getOpenShiftRoute() *api.Route {
	return &api.Route{
		Name:               utils.GetResourceName(a.alert.Name, util.AlertName, ""),
		Namespace:          a.alert.Spec.Namespace,
		Kind:               "Service",
		ServiceName:        utils.GetResourceName(a.alert.Name, util.AlertName, "alert"),
		PortName:           fmt.Sprintf("port-%d", *a.alert.Spec.Port),
		Labels:             map[string]string{"app": util.AlertName, "name": a.alert.Name, "component": "route"},
		TLSTerminationType: routev1.TLSTerminationPassthrough,
	}
}
