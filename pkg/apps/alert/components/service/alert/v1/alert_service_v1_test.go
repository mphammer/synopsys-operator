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
	"reflect"
	"testing"

	"github.com/blackducksoftware/synopsys-operator/pkg/apps/utils"

	alertapi "github.com/blackducksoftware/synopsys-operator/pkg/api/alert/v1"
	"github.com/blackducksoftware/synopsys-operator/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/util/intstr"
)

func TestSpecConfig_getAlertService(t *testing.T) {
	tests := []struct {
		name               string
		alertServiceConfig *AlertService
	}{
		{
			name: "base",
			alertServiceConfig: &AlertService{
				alert: &alertapi.Alert{
					Spec: alertapi.AlertSpec{
						Namespace: "alert",
						Port:      util.IntToInt32(8080),
					},
				},
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			want := &v1.Service{
				TypeMeta: metav1.TypeMeta{
					Kind:       "Service",
					APIVersion: "v1",
				},
				ObjectMeta: metav1.ObjectMeta{
					Name:      utils.GetResourceName(tt.alertServiceConfig.alert.Name, util.AlertName, "alert"),
					Namespace: tt.alertServiceConfig.alert.Spec.Namespace,
					Labels:    map[string]string{"app": util.AlertName, "name": tt.alertServiceConfig.alert.Name, "component": "alert"},
				},
				Spec: v1.ServiceSpec{
					Type: v1.ServiceTypeClusterIP,
					Ports: []v1.ServicePort{{
						Name:       fmt.Sprintf("port-%d", *tt.alertServiceConfig.alert.Spec.Port),
						Protocol:   v1.ProtocolTCP,
						Port:       int32(*tt.alertServiceConfig.alert.Spec.Port),
						TargetPort: intstr.Parse(fmt.Sprintf("%d", *tt.alertServiceConfig.alert.Spec.Port)),
					}},
					Selector: map[string]string{"app": util.AlertName, "name": tt.alertServiceConfig.alert.Name, "component": "alert"},
				},
			}
			if got := tt.alertServiceConfig.getAlertClusterService(); !reflect.DeepEqual(got.Service, want) {
				t.Errorf("SpecConfig.getAlertService() = %v, want %v", got.Service, want)
			}
		})
	}
}
