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

package util

import (
	"fmt"
	"os"
	"os/exec"
	"strings"
)

func HelmIsInPath() (bool, error) {
	_, err := exec.LookPath("helm")
	if err != nil {
		return false, nil
	}
	fmt.Printf("[DEBUG] helm exists\n")
	isV3, err := HelmIsV3()
	if err != nil {
		return false, fmt.Errorf("failed to determine if Helm is V3: %+v", err)
	}
	fmt.Printf("[DEBUG] helm is V3: %+v\n", isV3)
	if !isV3 {
		return false, fmt.Errorf("helm is not version V3")
	}
	return true, nil
}

func HelmIsV3() (bool, error) {
	cmd := exec.Command("helm", "version", "--short")
	stdoutErr, err := cmd.CombinedOutput()
	if err != nil {
		return false, fmt.Errorf("%s - %s", string(stdoutErr), err)
	}
	return strings.Contains(string(stdoutErr), "v3."), nil
}

func fileExists(filename string) bool {
	info, err := os.Stat(filename)
	if os.IsNotExist(err) {
		return false
	}
	return !info.IsDir()
}

func HelmCreate(name string, chartPath string, flagMap map[string]string) (string, error) {
	var helmExists bool
	var err error
	if helmExists, err = HelmIsInPath(); err != nil {
		return "", err
	}
	fmt.Printf("[DEBUG] helm V3 is in path: %+v\n", helmExists)
	if !helmExists {
		return "", fmt.Errorf("helm is not installed in path")
	}
	args := []string{"install", name, chartPath, "--namespace", name}
	for fieldName, fieldValue := range flagMap {
		args = append(args, "--set", fmt.Sprintf("%s=%s", fieldName, fieldValue))
	}
	fmt.Printf("[DEBUG] args: %+v\n", args)
	cmd := exec.Command("helm", args...)
	stdoutErr, err := cmd.CombinedOutput()
	if err != nil {
		return string(stdoutErr), err
	}
	return string(stdoutErr), nil
}

func HelmTemplate(name string, chartPath string, flagMap map[string]string) (string, error) {
	var helmExists bool
	var err error
	if helmExists, err = HelmIsInPath(); err != nil {
		return "", err
	}
	fmt.Printf("[DEBUG] helm V3 is in path: %+v\n", helmExists)
	if !helmExists {
		return "", fmt.Errorf("helm is not installed in path")
	}
	args := []string{"template", name, chartPath, "--namespace", name}
	for fieldName, fieldValue := range flagMap {
		args = append(args, "--set", fmt.Sprintf("%s=%s", fieldName, fieldValue))
	}
	fmt.Printf("[DEBUG] args: %+v\n", args)
	cmd := exec.Command("helm", args...)
	stdoutErr, err := cmd.CombinedOutput()
	if err != nil {
		return string(stdoutErr), err
	}
	return string(stdoutErr), nil
}
