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

	alert "github.com/blackducksoftware/synopsys-operator/pkg/alert"
	"github.com/blackducksoftware/synopsys-operator/pkg/api"
	alertv1 "github.com/blackducksoftware/synopsys-operator/pkg/api/alert/v1"
	blackduckv1 "github.com/blackducksoftware/synopsys-operator/pkg/api/blackduck/v1"
	opssightv1 "github.com/blackducksoftware/synopsys-operator/pkg/api/opssight/v1"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps"
	blackduck "github.com/blackducksoftware/synopsys-operator/pkg/blackduck"
	opssight "github.com/blackducksoftware/synopsys-operator/pkg/opssight"
	"github.com/blackducksoftware/synopsys-operator/pkg/protoform"
	util "github.com/blackducksoftware/synopsys-operator/pkg/util"
	log "github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/rest"
)

// Resource Ctls for Create Command
var createBlackduckCtl ResourceCtl
var createOpsSightCtl ResourceCtl
var createAlertCtl ResourceCtl

// Flags for the Base Spec (template)
var baseBlackduckSpec = "persistentStorageLatest"
var baseOpsSightSpec = "disabledBlackDuck"
var baseAlertSpec = "default"

// Flags for using mock mode - doesn't deploy
var createMockFormat string
var createKubeMockFormat string

// createCmd represents the create command
var createCmd = &cobra.Command{
	Use:   "create",
	Short: "Create a Synopsys Resource in your cluster",
	RunE: func(cmd *cobra.Command, args []string) error {
		return fmt.Errorf("Not a Valid Command")
	},
}

// createCmd represents the create command for Blackduck
var createBlackduckCmd = &cobra.Command{
	Use:   "blackduck NAMESPACE",
	Short: "Create an instance of a Blackduck",
	Args: func(cmd *cobra.Command, args []string) error {
		// Check Number of Arguments
		if len(args) != 1 {
			return fmt.Errorf("this command takes 1 argument")
		}
		// Check the Arguments
		err := createBlackduckCtl.CheckSpecFlags()
		if err != nil {
			return fmt.Errorf("%s", err)
		}
		// Set the Spec Type
		log.Debugf("setting template spec %s", baseBlackduckSpec)
		err = createBlackduckCtl.SwitchSpec(baseBlackduckSpec)
		if err != nil {
			log.Errorf("%s", err)
			return nil
		}
		return nil
	},
	RunE: func(cmd *cobra.Command, args []string) error {
		blackduckNamespace := args[0]
		log.Infof("creating Black Duck %s instance...", blackduckNamespace)

		// Update Spec with user's flags
		log.Debugf("updating Spec with User's Flags")
		createBlackduckCtl.SetChangedFlags(cmd.Flags())

		// Set Namespace in Spec
		blackduckSpec, _ := createBlackduckCtl.GetSpec().(blackduckv1.BlackduckSpec)
		blackduckSpec.Namespace = blackduckNamespace

		// Create and Deploy Blackduck CRD
		blackduck := &blackduckv1.Blackduck{
			ObjectMeta: metav1.ObjectMeta{
				Name:      blackduckNamespace,
				Namespace: blackduckNamespace,
			},
			Spec: blackduckSpec,
		}
		blackduck.Kind = "Blackduck"
		blackduck.APIVersion = "synopsys.com/v1"
		if cmd.LocalFlags().Lookup("mock").Changed {
			log.Debugf("running mock mode")
			err := printMock([]interface{}{blackduck}, createMockFormat)
			if err != nil {
				log.Errorf("failed to print in mock mode: %s", err)
				return nil
			}
		} else if cmd.LocalFlags().Lookup("kube-mock").Changed {
			log.Debugf("running kube mock mode")
			interfaces, err := CRDToKube(*blackduck, nil, restconfig)
			if err != nil {
				log.Errorf("failed to convert CRD to kube resources: %s", err)
			}
			err = printMock(interfaces, createKubeMockFormat)
			if err != nil {
				log.Errorf("failed to print in mock mode: %s", err)
				return nil
			}
		} else {
			// Create namespace for the Blackduck
			err := DeployCRDNamespace(restconfig, blackduckNamespace)
			if err != nil {
				log.Errorf("%s", err)
			}
			// Create Blackduck with Client
			log.Debugf("deploying Black Duck in namespace %s", blackduckNamespace)
			_, err = blackduckClient.SynopsysV1().Blackducks(blackduckNamespace).Create(blackduck)
			if err != nil {
				log.Errorf("error creating the %s Black Duck instance due to %+v", blackduckNamespace, err)
				return nil
			}
			log.Infof("successfully created Black Duck '%s' instance", blackduckNamespace)
		}
		return nil
	},
}

// createCmd represents the create command for OpsSight
var createOpsSightCmd = &cobra.Command{
	Use:   "opssight NAMESPACE",
	Short: "Create an instance of OpsSight",
	Args: func(cmd *cobra.Command, args []string) error {
		// Check Number of Arguments
		if len(args) != 1 {
			return fmt.Errorf("this command takes 1 argument")
		}
		// Check the Arguments
		err := createOpsSightCtl.CheckSpecFlags()
		if err != nil {
			return fmt.Errorf("%s", err)
		}
		// Set the Spec Type
		log.Debugf("setting OpsSight template spec %s", baseOpsSightSpec)
		err = createOpsSightCtl.SwitchSpec(baseOpsSightSpec)
		if err != nil {
			return err
		}
		return nil
	},
	RunE: func(cmd *cobra.Command, args []string) error {
		opsSightNamespace := args[0]
		log.Infof("creating OpsSight %s instance...", opsSightNamespace)

		// Update Spec with user's flags
		log.Debugf("updating Spec with User's Flags")
		createOpsSightCtl.SetChangedFlags(cmd.Flags())

		// Set Namespace in Spec
		opssightSpec, _ := createOpsSightCtl.GetSpec().(opssightv1.OpsSightSpec)
		opssightSpec.Namespace = opsSightNamespace

		// Create and Deploy OpsSight CRD
		opssight := &opssightv1.OpsSight{
			ObjectMeta: metav1.ObjectMeta{
				Name:      opsSightNamespace,
				Namespace: opsSightNamespace,
			},
			Spec: opssightSpec,
		}
		opssight.Kind = "OpsSight"
		opssight.APIVersion = "synopsys.com/v1"
		if cmd.LocalFlags().Lookup("mock").Changed {
			log.Debugf("running mock mode")
			err := printMock([]interface{}{opssight}, createMockFormat)
			if err != nil {
				log.Errorf("failed to print in mock mode: %s", err)
				return nil
			}
		} else if cmd.LocalFlags().Lookup("kube-mock").Changed {
			log.Debugf("running kube mock mode")
			interfaces, err := CRDToKube(*opssight, nil, restconfig)
			if err != nil {
				log.Errorf("failed to convert CRD to kube resources: %s", err)
			}
			err = printMock(interfaces, createKubeMockFormat)
			if err != nil {
				log.Errorf("failed to print in mock mode: %s", err)
				return nil
			}
		} else {
			// Create namespace for the OpsSight
			err := DeployCRDNamespace(restconfig, opsSightNamespace)
			if err != nil {
				log.Errorf("%s", err)
			}
			// Create OpsSight with Client
			log.Debugf("deploying OpsSight in namespace %s", opsSightNamespace)
			_, err = opssightClient.SynopsysV1().OpsSights(opsSightNamespace).Create(opssight)
			if err != nil {
				log.Errorf("error creating the %s OpsSight instance due to %+v", opsSightNamespace, err)
				return nil
			}
			log.Infof("successfully created OpsSight '%s' instance", opsSightNamespace)
		}
		return nil
	},
}

// createCmd represents the create command for Alert
var createAlertCmd = &cobra.Command{
	Use:   "alert NAMESPACE",
	Short: "Create an instance of Alert",
	Args: func(cmd *cobra.Command, args []string) error {
		// Check Number of Arguments
		if len(args) != 1 {
			return fmt.Errorf("this command takes 1 argument")
		}
		err := createAlertCtl.CheckSpecFlags()
		if err != nil {
			return fmt.Errorf("%s", err)
		}
		// Check/Set the Spec Type
		log.Debugf("setting Alert template spec %s", baseAlertSpec)
		err = createAlertCtl.SwitchSpec(baseAlertSpec)
		if err != nil {
			return err
		}
		return nil
	},
	RunE: func(cmd *cobra.Command, args []string) error {
		alertNamespace := args[0]
		log.Infof("creating Alert %s instance...", alertNamespace)

		// Update Spec with user's flags
		log.Debugf("updating Spec with User's Flags")
		createAlertCtl.SetChangedFlags(cmd.Flags())

		// Set Namespace in Spec
		alertSpec, _ := createAlertCtl.GetSpec().(alertv1.AlertSpec)
		alertSpec.Namespace = alertNamespace

		// Create and Deploy Alert CRD
		alert := &alertv1.Alert{
			ObjectMeta: metav1.ObjectMeta{
				Name:      alertNamespace,
				Namespace: alertNamespace,
			},
			Spec: alertSpec,
		}
		alert.Kind = "Alert"
		alert.APIVersion = "synopsys.com/v1"
		if cmd.LocalFlags().Lookup("mock").Changed {
			log.Debugf("running mock mode")
			err := printMock([]interface{}{alert}, createMockFormat)
			if err != nil {
				log.Errorf("failed to print in mock mode: %s", err)
				return nil
			}
		} else if cmd.LocalFlags().Lookup("kube-mock").Changed {
			log.Debugf("running kube mock mode")
			interfaces, err := CRDToKube(*alert, nil, restconfig)
			if err != nil {
				log.Errorf("failed to convert CRD to kube resources: %s", err)
			}
			err = printMock(interfaces, createKubeMockFormat)
			if err != nil {
				log.Errorf("failed to print in mock mode: %s", err)
				return nil
			}
		} else {
			// Create namespace for the Alert
			err := DeployCRDNamespace(restconfig, alertNamespace)
			if err != nil {
				log.Errorf("%s", err)
			}
			// Create the Alert with Client
			log.Debugf("deploying Alert in namespace %s", alertNamespace)
			_, err = alertClient.SynopsysV1().Alerts(alertNamespace).Create(alert)
			if err != nil {
				log.Errorf("error creating the %s Alert instance due to %+v", alertNamespace, err)
				return nil
			}
			log.Infof("successfully created Alert '%s' instance", alertNamespace)
		}
		return nil
	},
}

func init() {
	// initialize global resource ctl structs for commands to use
	createBlackduckCtl = blackduck.NewBlackduckCtl()
	createOpsSightCtl = opssight.NewOpsSightCtl()
	createAlertCtl = alert.NewAlertCtl()

	//(PassCmd) createCmd.DisableFlagParsing = true // lets createCmd pass flags to kube/oc
	rootCmd.AddCommand(createCmd)

	// Add Blackduck Command
	createBlackduckCmd.Flags().StringVar(&baseBlackduckSpec, "template", baseBlackduckSpec, "Base resource configuration to modify with flags [empty/template/persistentStorageLatest/persistentStorageV1/externalPersistentStorageLatest/externalPersistentStorageV1/bdba/ephemeral/ephemeralCustomAuthCA/externalDB/IPV6Disabled]")
	createBlackduckCmd.Flags().StringVar(&createMockFormat, "mock", createMockFormat, "Prints the CRD resource spec in the specified format instead of creating it [json/yaml]")
	createBlackduckCmd.Flags().StringVar(&createKubeMockFormat, "kube-mock", createKubeMockFormat, "Prints the Kubernetes resource specs in the specified format instead of creating it [json/yaml]")
	createBlackduckCtl.AddSpecFlags(createBlackduckCmd, true)
	createCmd.AddCommand(createBlackduckCmd)

	// Add OpsSight Command
	createOpsSightCmd.Flags().StringVar(&baseOpsSightSpec, "template", baseOpsSightSpec, "Base resource configuration to modify with flags [empty/template/default/disabledBlackDuck]")
	createOpsSightCmd.Flags().StringVar(&createMockFormat, "mock", createMockFormat, "Prints the resource spec in the specified format instead of creating it [json/yaml]")
	createOpsSightCmd.Flags().StringVar(&createKubeMockFormat, "kube-mock", createKubeMockFormat, "Prints the Kubernetes resource specs in the specified format instead of creating it [json/yaml]")
	createOpsSightCtl.AddSpecFlags(createOpsSightCmd, true)
	createCmd.AddCommand(createOpsSightCmd)

	// Add Alert Command
	createAlertCmd.Flags().StringVar(&baseAlertSpec, "template", baseAlertSpec, "Base resource configuration to modify with flags [empty/template/default]")
	createAlertCmd.Flags().StringVar(&createMockFormat, "mock", createMockFormat, "Prints the resource spec in the specified format instead of creating it [json/yaml]")
	createAlertCmd.Flags().StringVar(&createKubeMockFormat, "kube-mock", createKubeMockFormat, "Prints the Kubernetes resource specs in the specified format instead of creating it [json/yaml]")
	createAlertCtl.AddSpecFlags(createAlertCmd, true)
	createCmd.AddCommand(createAlertCmd)
}

func printMock(objs []interface{}, format string) error {
	for _, obj := range objs {
		_, err := util.PrettyPrint(obj, format)
		if err != nil {
			return fmt.Errorf("failed to print in mock mode: %s", err)
		}
		fmt.Printf("---\n")
	}
	return nil
}

func CRDToKube(crd interface{}, pc *protoform.Config, rc *rest.Config) ([]interface{}, error) {
	if pc == nil {
		pc = &protoform.Config{}
		pc.SelfSetDefaults()
		pc.DryRun = true
	}
	app := apps.NewApp(pc, rc)

	alert, ok := crd.(alertv1.Alert)
	if ok {
		cList, err := app.Alert().GetComponents(&alert)
		if err != nil {
			return nil, fmt.Errorf("failed to get components: %s", err)
		}
		return GetKubeInterfaces(cList), nil
	}

	blackDuck, ok := crd.(blackduckv1.Blackduck)
	if ok {
		cList, err := app.Blackduck().GetComponents(&blackDuck)
		if err != nil {
			return nil, fmt.Errorf("failed to get components: %s", err)
		}
		return GetKubeInterfaces(cList), nil
	}

	opsSight, ok := crd.(opssightv1.OpsSight)
	if ok {
		sc := opssight.NewSpecConfig(pc, kubeClient, opssightClient, blackduckClient, &opsSight, true)
		cList, err := sc.GetComponents()
		if err != nil {
			return nil, fmt.Errorf("failed to get components: %s", err)
		}
		return GetKubeInterfaces(cList), nil
	}

	return nil, fmt.Errorf("invalid crd interface: %+v", crd)
}

func GetKubeInterfaces(clist *api.ComponentList) []interface{} {
	cList := []interface{}{}
	for _, rc := range clist.ReplicationControllers {
		o, _ := rc.ToKube()
		cList = append(cList, o)
	}
	for _, svc := range clist.Services {
		o, _ := svc.ToKube()
		cList = append(cList, o)
	}
	for _, cm := range clist.ConfigMaps {
		o, _ := cm.ToKube()
		cList = append(cList, o)
	}
	for _, sa := range clist.ServiceAccounts {
		o, _ := sa.ToKube()
		cList = append(cList, o)
	}
	for _, crb := range clist.ClusterRoleBindings {
		o, _ := crb.ToKube()
		cList = append(cList, o)
	}
	for _, cr := range clist.ClusterRoles {
		o, _ := cr.ToKube()
		cList = append(cList, o)
	}
	for _, d := range clist.Deployments {
		o, _ := d.ToKube()
		cList = append(cList, o)
	}
	for _, sec := range clist.Secrets {
		o, _ := sec.ToKube()
		o2 := o.(*corev1.Secret)
		cList = append(cList, o)
		fmt.Printf("%+v\n", o2)
	}
	for _, pvc := range clist.PersistentVolumeClaims {
		o, _ := pvc.ToKube()
		cList = append(cList, o)
	}
	return cList
}
