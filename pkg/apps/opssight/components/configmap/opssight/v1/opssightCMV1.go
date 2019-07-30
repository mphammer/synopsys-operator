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
	"encoding/json"
	"fmt"

	horizonapi "github.com/blackducksoftware/horizon/pkg/api"
	"github.com/blackducksoftware/horizon/pkg/components"
	opssightapi "github.com/blackducksoftware/synopsys-operator/pkg/api/opssight/v1"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/store"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/types"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/utils"
	"github.com/blackducksoftware/synopsys-operator/pkg/protoform"
	"github.com/blackducksoftware/synopsys-operator/pkg/util"
	"github.com/juju/errors"
	"k8s.io/client-go/kubernetes"
)

// OpsSightConfigmap holds the OpsSight config map configuration
type OpsSightConfigmap struct {
	config     *protoform.Config
	kubeClient *kubernetes.Clientset
	opsSight   *opssightapi.OpsSight
}

func init() {
	store.Register(types.OpsSightConfigMapV1, NewOpsSightConfigmap)
}

// NewOpsSightConfigmap returns the OpsSight config map configuration
func NewOpsSightConfigmap(config *protoform.Config, kubeClient *kubernetes.Clientset, cr interface{}) (types.ConfigMapInterface, error) {
	opsSight, ok := cr.(*opssightapi.OpsSight)
	if !ok {
		return nil, fmt.Errorf("unable to cast the interface to OpsSight object")
	}
	return &OpsSightConfigmap{config: config, kubeClient: kubeClient, opsSight: opsSight}, nil
}

// GetCM returns the config map
func (o OpsSightConfigmap) GetCM() (*components.ConfigMap, error) {
	name := utils.GetResourceName(o.opsSight.Name, util.OpsSightName, o.opsSight.Spec.ConfigMapName)
	cm := components.NewConfigMap(horizonapi.ConfigMapConfig{
		Name:      name,
		Namespace: o.opsSight.Spec.Namespace,
	})

	configMapString, err := o.getCM().jsonString()
	if err != nil {
		return nil, errors.Trace(err)
	}

	cm.AddLabels(map[string]string{"app": "opssight", "component": name, "name": o.opsSight.Name})
	cm.AddData(map[string]string{fmt.Sprintf("%s.json", o.opsSight.Spec.ConfigMapName): configMapString})

	return cm, nil
}

// PerceiverConfig stores the Perceiver configuration
type PerceiverConfig struct {
	AnnotationIntervalSeconds int
	DumpIntervalMinutes       int
	Port                      int
	Pod                       *PodPerceiverConfig
	Image                     *ImagePerceiverConfig
}

// ImagePerceiverConfig stores the Image Perceiver configuration
type ImagePerceiverConfig struct{}

// PodPerceiverConfig stores the Pod Perceiver configuration
type PodPerceiverConfig struct {
	NamespaceFilter string
}

// BlackDuckConfig stores the Black Duck configuration
type BlackDuckConfig struct {
	ConnectionsEnvironmentVariableName string
	TLSVerification                    bool
}

// PerceptorTimingsConfig stores the Perceptor configuration
type PerceptorTimingsConfig struct {
	CheckForStalledScansPauseHours int
	StalledScanClientTimeoutHours  int
	ModelMetricsPauseSeconds       int
	UnknownImagePauseMilliseconds  int
	ClientTimeoutMilliseconds      int
}

// PerceptorConfig stores the Perceptor configuration
type PerceptorConfig struct {
	Timings     *PerceptorTimingsConfig
	UseMockMode bool
	Host        string
	Port        int
}

// ScannerConfig stores the Perceptor Scanner configuration
type ScannerConfig struct {
	Port                          int
	ImageDirectory                string
	BlackDuckClientTimeoutSeconds int
}

// ImageFacadeConfig stores the Perceptor Image Facade configuration
type ImageFacadeConfig struct {
	Host             string
	Port             int
	ImagePullerType  string
	CreateImagesOnly bool
}

// SkyfireConfig stores the Skyfire configuration
type SkyfireConfig struct {
	UseInClusterConfig            bool
	Port                          int
	PrometheusPort                int
	BlackDuckClientTimeoutSeconds int
	KubeDumpIntervalSeconds       int
	PerceptorDumpIntervalSeconds  int
	BlackDuckDumpPauseSeconds     int
}

// MainOpssightConfigMap stores the opssight configmap
type MainOpssightConfigMap struct {
	Perceiver   *PerceiverConfig
	BlackDuck   *BlackDuckConfig
	Perceptor   *PerceptorConfig
	Scanner     *ScannerConfig
	ImageFacade *ImageFacadeConfig
	Skyfire     *SkyfireConfig
	LogLevel    string
}

func (o OpsSightConfigmap) getCM() *MainOpssightConfigMap {
	opssightSpec := &o.opsSight.Spec
	return &MainOpssightConfigMap{
		LogLevel: opssightSpec.LogLevel,
		BlackDuck: &BlackDuckConfig{
			ConnectionsEnvironmentVariableName: opssightSpec.Blackduck.ConnectionsEnvironmentVariableName,
			TLSVerification:                    opssightSpec.Blackduck.TLSVerification,
		},
		ImageFacade: &ImageFacadeConfig{
			CreateImagesOnly: false,
			Host:             "localhost",
			Port:             opssightSpec.ScannerPod.ImageFacade.Port,
			ImagePullerType:  opssightSpec.ScannerPod.ImageFacade.ImagePullerType,
		},
		Perceiver: &PerceiverConfig{
			Image: &ImagePerceiverConfig{},
			Pod: &PodPerceiverConfig{
				NamespaceFilter: opssightSpec.Perceiver.PodPerceiver.NamespaceFilter,
			},
			AnnotationIntervalSeconds: opssightSpec.Perceiver.AnnotationIntervalSeconds,
			DumpIntervalMinutes:       opssightSpec.Perceiver.DumpIntervalMinutes,
			Port:                      opssightSpec.Perceiver.Port,
		},
		Perceptor: &PerceptorConfig{
			Timings: &PerceptorTimingsConfig{
				CheckForStalledScansPauseHours: opssightSpec.Perceptor.CheckForStalledScansPauseHours,
				ClientTimeoutMilliseconds:      opssightSpec.Perceptor.ClientTimeoutMilliseconds,
				ModelMetricsPauseSeconds:       opssightSpec.Perceptor.ModelMetricsPauseSeconds,
				StalledScanClientTimeoutHours:  opssightSpec.Perceptor.StalledScanClientTimeoutHours,
				UnknownImagePauseMilliseconds:  opssightSpec.Perceptor.UnknownImagePauseMilliseconds,
			},
			Host:        utils.GetResourceName(o.opsSight.Name, util.OpsSightName, opssightSpec.Perceptor.Name),
			Port:        opssightSpec.Perceptor.Port,
			UseMockMode: false,
		},
		Scanner: &ScannerConfig{
			BlackDuckClientTimeoutSeconds: opssightSpec.ScannerPod.Scanner.ClientTimeoutSeconds,
			ImageDirectory:                opssightSpec.ScannerPod.ImageDirectory,
			Port:                          opssightSpec.ScannerPod.Scanner.Port,
		},
		Skyfire: &SkyfireConfig{
			BlackDuckClientTimeoutSeconds: opssightSpec.Skyfire.HubClientTimeoutSeconds,
			BlackDuckDumpPauseSeconds:     opssightSpec.Skyfire.HubDumpPauseSeconds,
			KubeDumpIntervalSeconds:       opssightSpec.Skyfire.KubeDumpIntervalSeconds,
			PerceptorDumpIntervalSeconds:  opssightSpec.Skyfire.PerceptorDumpIntervalSeconds,
			Port:                          opssightSpec.Skyfire.Port,
			PrometheusPort:                opssightSpec.Skyfire.PrometheusPort,
			UseInClusterConfig:            true,
		},
	}
}

func (cm *MainOpssightConfigMap) jsonString() (string, error) {
	bytes, err := json.MarshalIndent(cm, "", "  ")
	if err != nil {
		return "", errors.Annotate(err, "unable to serialize to json")
	}
	return string(bytes), nil
}
