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

package synopsysctl

import (
	"fmt"

	"github.com/blackducksoftware/synopsys-operator/pkg/util"
	log "github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
)

//  Join-Network Command Defaults

// joinNetworkCmd joins networks between resources when communication
// between namespaces is not allowed
var joinNetworkCmd = &cobra.Command{
	Use:     "join-network RESOURCE_PROJECT_NAME",
	Example: "synopsysctl join-network black-duck-project",
	Short:   "Allows communication between Synopsys Operator and a resource",
	Args: func(cmd *cobra.Command, args []string) error {
		// Check number of arguments
		if len(args) != 1 {
			return fmt.Errorf("this command takes 2 arguments")
		}
		return nil
	},
	RunE: func(cmd *cobra.Command, args []string) error {
		// Read Commandline Parameters
		projectName := args[0]

		// check cluster type
		if !kube {
			log.Errorf("must be using kubernetes cluster")
			return nil
		}

		// Get the namespace of Synopsys Operator
		sOperatorNamespace, err := util.GetOperatorNamespace(kubeClient)
		if err != nil {
			log.Errorf("error finding Synopsys Operator due to %+v", err)
			return nil
		}

		// Create a project for the resource
		log.Debugf("creating project %s for the resource", projectName)
		err = RunKubeEditorCmd(restconfig, kube, openshift, "create", "project", projectName)
		if err != nil {
			log.Errorf("failed to create project: %s", err)
		}

		// Link the Synopsys Operator to the new project
		err = RunKubeEditorCmd(restconfig, kube, openshift, "adm", "pod-network", "join-projects", fmt.Sprintf("--to=%s", sOperatorNamespace), projectName)
		if err != nil {
			log.Errorf("failed to link Synopsys Operator: %s", err)
		}

		log.Infof("Synopsys Operator can communicate with resources in project %s", projectName)

		return nil
	},
}

func init() {
	rootCmd.AddCommand(joinNetworkCmd)
}
