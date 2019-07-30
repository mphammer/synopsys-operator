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
	opssightapi "github.com/blackducksoftware/synopsys-operator/pkg/api/opssight/v1"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/store"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/types"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/utils"
	"github.com/blackducksoftware/synopsys-operator/pkg/protoform"
	"github.com/blackducksoftware/synopsys-operator/pkg/util"
	"k8s.io/client-go/kubernetes"
)

// OpsSightClusterRoleBinding holds the Cluster Role Binding configuration
type OpsSightClusterRoleBinding struct {
	config     *protoform.Config
	kubeClient *kubernetes.Clientset
	opsSight   *opssightapi.OpsSight
}

func init() {
	store.Register(types.OpsSightScannerClusterRoleBindingV1, NewOpsSightClusterRoleBinding)
}

// NewOpsSightClusterRoleBinding returns the OpsSight Cluster role binding configuration
func NewOpsSightClusterRoleBinding(config *protoform.Config, kubeClient *kubernetes.Clientset, cr interface{}) (types.ClusterRoleBindingInterface, error) {
	opsSight, ok := cr.(*opssightapi.OpsSight)
	if !ok {
		return nil, fmt.Errorf("unable to cast the interface to OpsSight object")
	}
	return &OpsSightClusterRoleBinding{config: config, kubeClient: kubeClient, opsSight: opsSight}, nil
}

// GetClusterRoleBinding returns the Cluster role binding
func (o *OpsSightClusterRoleBinding) GetClusterRoleBinding() (*components.ClusterRoleBinding, error) {
	clusterRole := []string{"synopsys-operator-admin"}
	var err error
	if !o.config.DryRun {
		clusterRole, _, err = util.GetOperatorRoles(o.kubeClient, o.config.Namespace)
		if err != nil {
			return nil, err
		}
	}

	if len(clusterRole) == 0 {
		return nil, fmt.Errorf("unable to find the synopsys operator cluster role")
	}

	scannerCRB := components.NewClusterRoleBinding(horizonapi.ClusterRoleBindingConfig{
		Name:       utils.GetResourceName(o.opsSight.Name, util.OpsSightName, o.opsSight.Spec.ScannerPod.Name),
		APIVersion: "rbac.authorization.k8s.io/v1",
	})

	scannerCRB.AddSubject(horizonapi.SubjectConfig{
		Kind:      "ServiceAccount",
		Name:      utils.GetResourceName(o.opsSight.Name, util.OpsSightName, o.opsSight.Spec.ScannerPod.ImageFacade.ServiceAccount),
		Namespace: o.opsSight.Spec.Namespace,
	})
	scannerCRB.AddRoleRef(horizonapi.RoleRefConfig{
		APIGroup: "",
		Kind:     "ClusterRole",
		Name:     clusterRole[0],
	})
	scannerCRB.AddLabels(map[string]string{"component": o.opsSight.Spec.ScannerPod.Name, "app": "opssight", "name": o.opsSight.Name})

	return scannerCRB, nil
}
