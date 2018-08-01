/*
Copyright The Kubernetes Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// Code generated by client-gen. DO NOT EDIT.

package v1

import (
	v1 "github.com/blackducksoftware/perceptor-protoform/pkg/api/hub/v1"
	scheme "github.com/blackducksoftware/perceptor-protoform/pkg/client/clientset/versioned/scheme"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	types "k8s.io/apimachinery/pkg/types"
	watch "k8s.io/apimachinery/pkg/watch"
	rest "k8s.io/client-go/rest"
)

// HubsGetter has a method to return a HubInterface.
// A group's client should implement this interface.
type HubsGetter interface {
	Hubs(namespace string) HubInterface
}

// HubInterface has methods to work with Hub resources.
type HubInterface interface {
	Create(*v1.Hub) (*v1.Hub, error)
	Update(*v1.Hub) (*v1.Hub, error)
	Delete(name string, options *metav1.DeleteOptions) error
	DeleteCollection(options *metav1.DeleteOptions, listOptions metav1.ListOptions) error
	Get(name string, options metav1.GetOptions) (*v1.Hub, error)
	List(opts metav1.ListOptions) (*v1.HubList, error)
	Watch(opts metav1.ListOptions) (watch.Interface, error)
	Patch(name string, pt types.PatchType, data []byte, subresources ...string) (result *v1.Hub, err error)
	HubExpansion
}

// hubs implements HubInterface
type hubs struct {
	client rest.Interface
	ns     string
}

// newHubs returns a Hubs
func newHubs(c *SynopsysV1Client, namespace string) *hubs {
	return &hubs{
		client: c.RESTClient(),
		ns:     namespace,
	}
}

// Get takes name of the hub, and returns the corresponding hub object, and an error if there is any.
func (c *hubs) Get(name string, options metav1.GetOptions) (result *v1.Hub, err error) {
	result = &v1.Hub{}
	err = c.client.Get().
		Namespace(c.ns).
		Resource("hubs").
		Name(name).
		VersionedParams(&options, scheme.ParameterCodec).
		Do().
		Into(result)
	return
}

// List takes label and field selectors, and returns the list of Hubs that match those selectors.
func (c *hubs) List(opts metav1.ListOptions) (result *v1.HubList, err error) {
	result = &v1.HubList{}
	err = c.client.Get().
		Namespace(c.ns).
		Resource("hubs").
		VersionedParams(&opts, scheme.ParameterCodec).
		Do().
		Into(result)
	return
}

// Watch returns a watch.Interface that watches the requested hubs.
func (c *hubs) Watch(opts metav1.ListOptions) (watch.Interface, error) {
	opts.Watch = true
	return c.client.Get().
		Namespace(c.ns).
		Resource("hubs").
		VersionedParams(&opts, scheme.ParameterCodec).
		Watch()
}

// Create takes the representation of a hub and creates it.  Returns the server's representation of the hub, and an error, if there is any.
func (c *hubs) Create(hub *v1.Hub) (result *v1.Hub, err error) {
	result = &v1.Hub{}
	err = c.client.Post().
		Namespace(c.ns).
		Resource("hubs").
		Body(hub).
		Do().
		Into(result)
	return
}

// Update takes the representation of a hub and updates it. Returns the server's representation of the hub, and an error, if there is any.
func (c *hubs) Update(hub *v1.Hub) (result *v1.Hub, err error) {
	result = &v1.Hub{}
	err = c.client.Put().
		Namespace(c.ns).
		Resource("hubs").
		Name(hub.Name).
		Body(hub).
		Do().
		Into(result)
	return
}

// Delete takes name of the hub and deletes it. Returns an error if one occurs.
func (c *hubs) Delete(name string, options *metav1.DeleteOptions) error {
	return c.client.Delete().
		Namespace(c.ns).
		Resource("hubs").
		Name(name).
		Body(options).
		Do().
		Error()
}

// DeleteCollection deletes a collection of objects.
func (c *hubs) DeleteCollection(options *metav1.DeleteOptions, listOptions metav1.ListOptions) error {
	return c.client.Delete().
		Namespace(c.ns).
		Resource("hubs").
		VersionedParams(&listOptions, scheme.ParameterCodec).
		Body(options).
		Do().
		Error()
}

// Patch applies the patch and returns the patched hub.
func (c *hubs) Patch(name string, pt types.PatchType, data []byte, subresources ...string) (result *v1.Hub, err error) {
	result = &v1.Hub{}
	err = c.client.Patch(pt).
		Namespace(c.ns).
		Resource("hubs").
		SubResource(subresources...).
		Name(name).
		Body(data).
		Do().
		Into(result)
	return
}
