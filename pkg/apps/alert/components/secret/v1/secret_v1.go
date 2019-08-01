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

	horizonapi "github.com/blackducksoftware/horizon/pkg/api"
	"github.com/blackducksoftware/horizon/pkg/components"
	alertapi "github.com/blackducksoftware/synopsys-operator/pkg/api/alert/v1"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/store"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/types"
	"github.com/blackducksoftware/synopsys-operator/pkg/apps/utils"
	"github.com/blackducksoftware/synopsys-operator/pkg/protoform"
	"github.com/blackducksoftware/synopsys-operator/pkg/util"
	"k8s.io/client-go/kubernetes"
)

// AlertSecret holds the Alert secret configuration
type AlertSecret struct {
	config     *protoform.Config
	kubeClient *kubernetes.Clientset
	alert      *alertapi.Alert
}

func init() {
	store.Register(types.AlertSecretV1, NewAlertSecret)
}

// NewAlertSecret returns the Black Duck secret configuration
func NewAlertSecret(config *protoform.Config, kubeClient *kubernetes.Clientset, cr interface{}) (types.SecretInterface, error) {
	alert, ok := cr.(*alertapi.Alert)
	if !ok {
		return nil, fmt.Errorf("unable to cast the interface to Alert object")
	}
	return &AlertSecret{config: config, kubeClient: kubeClient, alert: alert}, nil
}

// GetSecret returns the secret
func (a *AlertSecret) GetSecret() (*components.Secret, error) {
	return a.getAlertSecret()
}

// getAlertSecret creates a Secret Horizon component for the Alert
func (a *AlertSecret) getAlertSecret() (*components.Secret, error) {
	// Check Secret Values
	encryptPassLength := len(a.alert.Spec.EncryptionPassword)
	if encryptPassLength > 0 && encryptPassLength < 16 {
		return nil, fmt.Errorf("encryption password is %d characters, it must be 16 or more", encryptPassLength)
	}
	encryptGlobalSaltLength := len(a.alert.Spec.EncryptionGlobalSalt)
	if encryptGlobalSaltLength > 0 && encryptGlobalSaltLength < 16 {
		return nil, fmt.Errorf("encryption global salt is %d characters, it must be 16 or more", encryptGlobalSaltLength)
	}

	// create a secret
	alertSecret := components.NewSecret(horizonapi.SecretConfig{
		Name:      utils.GetResourceName(a.alert.Name, util.AlertName, "secret"),
		Namespace: a.alert.Spec.Namespace,
		Type:      horizonapi.SecretTypeOpaque,
	})

	alertSecretData := make(map[string][]byte, 0)
	if len(a.alert.Spec.EncryptionPassword) > 0 {
		alertSecretData["ALERT_ENCRYPTION_PASSWORD"] = []byte(a.alert.Spec.EncryptionPassword)
	}

	if len(a.alert.Spec.EncryptionGlobalSalt) > 0 {
		alertSecretData["ALERT_ENCRYPTION_GLOBAL_SALT"] = []byte(a.alert.Spec.EncryptionGlobalSalt)
	}
	alertSecret.AddData(alertSecretData)

	alertSecret.AddLabels(map[string]string{"app": util.AlertName, "name": a.alert.Name, "component": "alert"})
	return alertSecret, nil

}
