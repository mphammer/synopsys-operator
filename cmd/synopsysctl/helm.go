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

package main

import (
	"fmt"

	"github.com/blackducksoftware/synopsys-operator/pkg/util"
)

func main() {
	fmt.Printf("Testing Helm...\n")
	path := "/Users/hammer/go/src/github.com/blackducksoftware/hub-backend/docker/hub-docker/src/main/dist/kubernetes/blackduck-helm"
	out, err := util.HelmCreate("myblackduck", path, map[string]string{"tlsCertSecretName": "myblackduck-blackduck-webserver-certificate", "enablePersistentStorage": "false", "postgres.isExternal": "false", "postgres.ssl": "false"})
	if err != nil {
		fmt.Printf("[ERROR] %+v\n", err)
		fmt.Printf("%+v\n", out)
	} else {
		fmt.Printf("%+v\n", out)
	}
}
