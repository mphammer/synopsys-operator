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
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/types"
)

// publicVersions represents the configurations of the different
// versions of Alert. It stores the names of all the resources
// each version needs
var publicVersions = map[string]types.PublicVersion{
	"3.1.0": {
		Size: types.AlertSizeV1,
		RCs: map[string]types.PublicPodResource{
			"alert": {
				Identifier: types.AlertRCV1,
				Container: map[types.ContainerName]string{
					types.AlertContainerName: "docker.io/blackducksoftware/blackduck-alert:3.1.0",
				},
			},
			"alertcfssl": {
				Identifier: types.AlertCfsslRCV1,
				Container: map[types.ContainerName]string{
					types.AlertCfsslContainerName: "docker.io/blackducksoftware/blackduck-cfssl:1.0.0",
				},
			},
		},
		Services: []types.ComponentName{
			types.AlertServiceV1,
			types.AlertCfsslServiceV1,
		},
		ConfigMaps: []types.ComponentName{
			types.AlertConfigmapV1,
		},
		Secrets: []types.ComponentName{
			types.AlertSecretV1,
		},
		PVC: []types.ComponentName{
			types.AlertPVCV1,
		},
	},
	"4.0.0": {
		Size: types.AlertSizeV1,
		RCs: map[string]types.PublicPodResource{
			"alert": {
				Identifier: types.AlertRCV1,
				Container: map[types.ContainerName]string{
					types.AlertContainerName: "docker.io/blackducksoftware/blackduck-alert:4.0.0",
				},
			},
			"alertcfssl": {
				Identifier: types.AlertCfsslRCV1,
				Container: map[types.ContainerName]string{
					types.AlertCfsslContainerName: "docker.io/blackducksoftware/blackduck-cfssl:1.0.0",
				},
			},
		},
		Services: []types.ComponentName{
			types.AlertServiceV1,
			types.AlertCfsslServiceV1,
		},
		ConfigMaps: []types.ComponentName{
			types.AlertConfigmapV1,
		},
		Secrets: []types.ComponentName{
			types.AlertSecretV1,
		},
		PVC: []types.ComponentName{
			types.AlertPVCV1,
		},
	},
}
