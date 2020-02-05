/*
Copyright (C) 2020 Synopsys, Inc.

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

package helm

type blackduckspecguy struct {
	nameOverride     string   `json:"nameOverride"`
	fullnameOverride string   `json:"fullnameOverride"`
	isKubernetes     bool     `json:"isKubernetes"`
	imageTag         string   `json:"imageTag"`
	registry         string   `json:"registry"`
	imagePullSecrets []string `json:"imagePullSecrets"`

	sealKey                 string `json:"sealKey"`
	enablePersistentStorage bool   `json:"enablePersistentStorage"`
	storageClass            string `json:"storageClass"`
	enableLivenessProbe     bool   `json:"enableLivenessProbe"`
	enableSourceCodeUpload  bool   `json:"enableSourceCodeUpload"`

	dataRetentionInDays      int      `json:"dataRetentionInDays"`
	maxTotalSourceSizeinMB   int      `json:"maxTotalSourceSizeinMB"`
	enableBinaryScanner      bool     `json:"enableBinaryScanner"`
	enableAlert              bool     `json:"enableAlert"`
	enableIPV6               bool     `json:"enableIPV6"`
	certAuthCACertSecretName string   `json:"certAuthCACertSecretName"`
	proxyCertSecretName      string   `json:"proxyCertSecretName"`
	status                   string   `json:"status"`
	environs                 []string `json:"environs"`

	postgres       postgres       `json:"postgres"`
	init           init           `json:"init"`
	authentication authentication `json:"authentication"`
	binaryscanner  binaryscanner  `json:"binaryscanner"`
	cfssl          cfssl          `json:"cfssl"`
	documentation  documentation  `json:"documentation"`
	jobrunner      jobrunner      `json:"jobrunner"`
	rabbitmq       rabbitmq       `json:"rabbitmq"`
	registration   registration   `json:"registration"`
	scan           scan           `json:"scan"`
	uploadcache    uploadcache    `json:"uploadcache"`
	webapp         webapp         `json:"webapp"`
	logstash       logstash       `json:"logstash"`
	webserver      webserver      `json:"webserver"`
	zookeeper      zookeeper      `json:"zookeeper"`
}

type postgres struct {
	registry           string          `json:"registry"`
	isExternal         bool            `json:"isExternal"`
	host               string          `json:"host"`
	port               int             `json:"port"`
	adminUserName      string          `json:"adminUserName"`
	adminPassword      string          `json:"adminPassword"`
	userUserName       string          `json:"userUserName"`
	userPassword       string          `json:"userPassword"`
	ssl                bool            `json:"ssl"`
	postgresPassword   string          `json:"postgresPassword"`
	requestCpu         string          `json:"requestCpu"`
	requestMemory      string          `json:"requestMemory"`
	claimSize          string          `json:"claimSize"`
	storageClass       string          `json:"storageClass"`
	nodeSelector       NodeSelector    `json:"nodeSelector"`
	tolerations        []string        `json:"tolerations"`
	affinity           NodeAffinity    `json:"affinity"`
	podSecurityContext SecurityContext `json:"podSecurityContext"`
	securityContext    SecurityContext `json:"securityContext"`
}

type init struct {
	registry        string          `json:"registry"`
	imageTag        string          `json:"imageTag"`
	securityContext SecurityContext `json:"securityContext"`
}

type authentication struct {
	registry           string          `json:"registry"`
	imageTag           string          `json:"imageTag"`
	limitMemory        string          `json:"limitMemory"`
	requestMemory      string          `json:"requestMemory"`
	hubMaxMemory       string          `json:"hubMaxMemory"`
	claimSize          string          `json:"claimSize"`
	storageClass       string          `json:"storageClass"`
	nodeSelector       NodeSelector    `json:"nodeSelector"`
	tolerations        []string        `json:"tolerations"`
	affinity           NodeAffinity    `json:"affinity"`
	podSecurityContext SecurityContext `json:"podSecurityContext"`
	securityContext    SecurityContext `json:"securityContext"`
}

type binaryscanner struct {
	registry           string          `json:"registry"`
	imageTag           string          `json:"imageTag"`
	limitCpu           string          `json:"limitCpu"`
	limitMemory        string          `json:"limitMemory"`
	requestCpu         string          `json:"requestCpu"`
	requestMemory      string          `json:"requestMemory"`
	nodeSelector       NodeSelector    `json:"nodeSelector"`
	tolerations        []string        `json:"tolerations"`
	affinity           NodeAffinity    `json:"affinity"`
	podSecurityContext SecurityContext `json:"podSecurityContext"`
	securityContext    SecurityContext `json:"securityContext"`
}

type cfssl struct {
	registry           string          `json:"registry"`
	imageTag           string          `json:"imageTag"`
	limitMemory        string          `json:"limitMemory"`
	requestMemory      string          `json:"requestMemory"`
	claimSize          string          `json:"claimSize"`
	storageClass       string          `json:"storageClass"`
	nodeSelector       NodeSelector    `json:"nodeSelector"`
	tolerations        []string        `json:"tolerations"`
	affinity           NodeAffinity    `json:"affinity"`
	podSecurityContext SecurityContext `json:"podSecurityContext"`
	securityContext    SecurityContext `json:"securityContext"`
}

type documentation struct {
	registry           string          `json:"registry"`
	imageTag           string          `json:"imageTag"`
	limitMemory        string          `json:"limitMemory"`
	requestMemory      string          `json:"requestMemory"`
	nodeSelector       NodeSelector    `json:"nodeSelector"`
	tolerations        []string        `json:"tolerations"`
	affinity           NodeAffinity    `json:"affinity"`
	podSecurityContext SecurityContext `json:"podSecurityContext"`
	securityContext    SecurityContext `json:"securityContext"`
}

type jobrunner struct {
	registry           string          `json:"registry"`
	imageTag           string          `json:"imageTag"`
	replicas           int             `json:"replicas"`
	limitCpu           string          `json:"limitCpu"`
	limitMemory        string          `json:"limitMemory"`
	requestCpu         string          `json:"requestCpu"`
	requestMemory      string          `json:"requestMemory"`
	hubMaxMemory       string          `json:"hubMaxMemory"`
	nodeSelector       NodeSelector    `json:"nodeSelector"`
	tolerations        []string        `json:"tolerations"`
	affinity           NodeAffinity    `json:"affinity"`
	podSecurityContext SecurityContext `json:"podSecurityContext"`
	securityContext    SecurityContext `json:"securityContext"`
}

type rabbitmq struct {
	registry           string          `json:"registry"`
	imageTag           string          `json:"imageTag"`
	limitMemory        string          `json:"limitMemory"`
	requestMemory      string          `json:"requestMemory"`
	nodeSelector       NodeSelector    `json:"nodeSelector"`
	tolerations        []string        `json:"tolerations"`
	affinity           NodeAffinity    `json:"affinity"`
	podSecurityContext SecurityContext `json:"podSecurityContext"`
	securityContext    SecurityContext `json:"securityContext"`
}

type registration struct {
	registry           string          `json:"registry"`
	imageTag           string          `json:"imageTag"`
	limitMemory        string          `json:"limitMemory"`
	requestCpu         string          `json:"requestCpu"`
	requestMemory      string          `json:"requestMemory"`
	claimSize          string          `json:"claimSize"`
	storageClass       string          `json:"storageClass"`
	nodeSelector       NodeSelector    `json:"nodeSelector"`
	tolerations        []string        `json:"tolerations"`
	affinity           NodeAffinity    `json:"affinity"`
	podSecurityContext SecurityContext `json:"podSecurityContext"`
	securityContext    SecurityContext `json:"securityContext"`
}

type scan struct {
	registry           string          `json:"registry"`
	imageTag           string          `json:"imageTag"`
	replicas           int             `json:"replicas"`
	limitMemory        string          `json:"limitMemory"`
	requestMemory      string          `json:"requestMemory"`
	hubMaxMemory       string          `json:"hubMaxMemory"`
	nodeSelector       NodeSelector    `json:"nodeSelector"`
	tolerations        []string        `json:"tolerations"`
	affinity           NodeAffinity    `json:"affinity"`
	podSecurityContext SecurityContext `json:"podSecurityContext"`
	securityContext    SecurityContext `json:"securityContext"`
}

type uploadcache struct {
	registry           string          `json:"registry"`
	imageTag           string          `json:"imageTag"`
	limitMemory        string          `json:"limitMemory"`
	requestMemory      string          `json:"requestMemory"`
	claimSize          string          `json:"claimSize"`
	storageClass       string          `json:"storageClass"`
	nodeSelector       NodeSelector    `json:"nodeSelector"`
	tolerations        []string        `json:"tolerations"`
	affinity           NodeAffinity    `json:"affinity"`
	podSecurityContext SecurityContext `json:"podSecurityContext"`
	securityContext    SecurityContext `json:"securityContext"`
}

type webapp struct {
	registry           string          `json:"registry"`
	imageTag           string          `json:"imageTag"`
	limitMemory        string          `json:"limitMemory"`
	requestCpu         string          `json:"requestCpu"`
	requestMemory      string          `json:"requestMemory"`
	hubMaxMemory       string          `json:"hubMaxMemory"`
	claimSize          string          `json:"claimSize"`
	storageClass       string          `json:"storageClass"`
	nodeSelector       NodeSelector    `json:"nodeSelector"`
	tolerations        []string        `json:"tolerations"`
	affinity           NodeAffinity    `json:"affinity"`
	podSecurityContext SecurityContext `json:"podSecurityContext"`
	securityContext    SecurityContext `json:"securityContext"`
}

type logstash struct {
	registry        string          `json:"registry"`
	imageTag        string          `json:"imageTag"`
	limitMemory     string          `json:"limitMemory"`
	requestMemory   string          `json:"requestMemory"`
	claimSize       string          `json:"claimSize"`
	storageClass    string          `json:"storageClass"`
	nodeSelector    NodeSelector    `json:"nodeSelector"`
	tolerations     []string        `json:"tolerations"`
	affinity        NodeAffinity    `json:"affinity"`
	securityContext SecurityContext `json:"securityContext"`
}

type webserver struct {
	registry           string          `json:"registry"`
	imageTag           string          `json:"imageTag"`
	limitMemory        string          `json:"limitMemory"`
	requestMemory      string          `json:"requestMemory"`
	nodeSelector       NodeSelector    `json:"nodeSelector"`
	tolerations        []string        `json:"tolerations"`
	affinity           NodeAffinity    `json:"affinity"`
	podSecurityContext SecurityContext `json:"podSecurityContext"`
	securityContext    SecurityContext `json:"securityContext"`
}

type zookeeper struct {
	registry           string          `json:"registry"`
	imageTag           string          `json:"imageTag"`
	limitMemory        string          `json:"limitMemory"`
	requestCpu         string          `json:"requestCpu"`
	requestMemory      string          `json:"requestMemory"`
	claimSize          string          `json:"claimSize"`
	storageClass       string          `json:"storageClass"`
	nodeSelector       NodeSelector    `json:"nodeSelector"`
	tolerations        []string        `json:"tolerations"`
	affinity           NodeAffinity    `json:"affinity"`
	podSecurityContext SecurityContext `json:"podSecurityContext"`
	securityContext    SecurityContext `json:"securityContext"`
}

type NodeSelector struct {
	Value string
}

type NodeAffinity struct {
	Value string
}

type SecurityContext struct {
	RunAsUser  int64
	RunAsGroup int64
	FsGroup    int64
}
