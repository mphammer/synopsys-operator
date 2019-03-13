/*
Copyright (C) 2018 Synopsys, Inc.

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

package rgp

import (
	"fmt"

	rgpv1 "github.com/blackducksoftware/synopsys-operator/pkg/api/rgp/v1"
	crddefaults "github.com/blackducksoftware/synopsys-operator/pkg/util"
	log "github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
	"github.com/spf13/pflag"
)

// Ctl type provides functionality for an Rgp
// for the Synopsysctl tool
type Ctl struct {
	Spec         *rgpv1.RgpSpec
	StorageClass string
	IngressClass string
	IngressHost  string
}

// NewRgpCtl creates a new RgpCtl struct
func NewRgpCtl() *Ctl {
	return &Ctl{
		Spec:         &rgpv1.RgpSpec{},
		StorageClass: "",
		IngressClass: "",
		IngressHost:  "",
	}
}

// GetSpec returns the Spec for the resource
func (ctl *Ctl) GetSpec() interface{} {
	return *ctl.Spec
}

// SetSpec sets the Spec for the resource
func (ctl *Ctl) SetSpec(spec interface{}) error {
	convertedSpec, ok := spec.(rgpv1.RgpSpec)
	if !ok {
		return fmt.Errorf("Error setting Rgp Spec")
	}
	ctl.Spec = &convertedSpec
	return nil
}

// CheckSpecFlags returns an error if a user input was invalid
func (ctl *Ctl) CheckSpecFlags() error {
	return nil
}

// SwitchSpec switches the Rgp's Spec to a different predefined spec
func (ctl *Ctl) SwitchSpec(createRgpSpecType string) error {
	switch createRgpSpecType {
	case "empty":
		ctl.Spec = &rgpv1.RgpSpec{}
	case "spec1":
		ctl.Spec = crddefaults.GetRgpDefaultValue()
	default:
		return fmt.Errorf("Rgp Spec Type %s does not match: empty, spec1, spec2", createRgpSpecType)
	}
	return nil
}

// AddSpecFlags adds flags for the Rgp's Spec to the command
func (ctl *Ctl) AddSpecFlags(cmd *cobra.Command) {
	cmd.Flags().StringVar(&ctl.StorageClass, "storage-class", ctl.StorageClass, "TODO")
	cmd.Flags().StringVar(&ctl.IngressClass, "ingress-class", ctl.IngressClass, "TODO")
	cmd.Flags().StringVar(&ctl.IngressHost, "ingress-host", ctl.IngressHost, "TODO")
}

// SetChangedFlags visits every flag and calls setFlag to update
// the resource's spec
func (ctl *Ctl) SetChangedFlags(flagset *pflag.FlagSet) {
	flagset.VisitAll(ctl.SetFlag)
}

// SetFlag sets an Rgp's Spec field if its flag was changed
func (ctl *Ctl) SetFlag(f *pflag.Flag) {
	if f.Changed {
		log.Debugf("Flag %s: CHANGED\n", f.Name)
		switch f.Name {
		case "storage-class":
			ctl.Spec.StorageClass = ctl.StorageClass
		case "ingress-class":
			ctl.Spec.IngressClass = ctl.IngressClass
		case "ingress-host":
			ctl.Spec.IngressHost = ctl.IngressHost
		default:
			log.Debugf("Flag %s: Not Found\n", f.Name)
		}
	} else {
		log.Debugf("Flag %s: UNCHANGED\n", f.Name)
	}
}
