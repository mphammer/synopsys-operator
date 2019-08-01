package components

import (
	// RCs
	_ "github.com/blackducksoftware/synopsys-operator/pkg/apps/alert/components/rc/alert/v1"
	_ "github.com/blackducksoftware/synopsys-operator/pkg/apps/alert/components/rc/cfssl/v1"

	// Services
	_ "github.com/blackducksoftware/synopsys-operator/pkg/apps/alert/components/service/alert/v1"
	_ "github.com/blackducksoftware/synopsys-operator/pkg/apps/alert/components/service/cfssl/v1"
	_ "github.com/blackducksoftware/synopsys-operator/pkg/apps/alert/components/service/expose/v1"

	// Configmap
	_ "github.com/blackducksoftware/synopsys-operator/pkg/apps/alert/components/configmap/v1"

	// Secrets
	_ "github.com/blackducksoftware/synopsys-operator/pkg/apps/alert/components/secret/v1"

	// PVCs
	_ "github.com/blackducksoftware/synopsys-operator/pkg/apps/alert/components/pvc/v1"
)
