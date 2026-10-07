# Platform Support

- **Kubernetes:** Can be installed on almost any Linux distribution.
- **OpenShift:** Supports Red Hat CoreOS for masternodes and CoreOS or RHEL for workernodes.

# Installation

- **Kubernetes:** Offers a variety of installation tools, including kubeadm, kops, and kube-spray.
- **OpenShift:** Has different installation procedures for different versions and provides tools designed especially for the cloud.

# User Interface

- **Kubernetes:** Offers a complex web-based interface, which may not be recommended for novices. Users need to install the Kubernetes Dashboard and forward the port address to access it.
- **OpenShift:** Provides a web-based console with a one-touch login page, offering a simpler form-based interface for managing resources.

# Updates

- **Kubernetes:** Allows multiple upgrades by invoking the kubeadm upgrade command.
- **OpenShift:** Requires accessing the Red Hat Enterprise Linux package management system for upgrades, with a recommendation to backup all existing installation files before upgrading.

# Networking

- **Kubernetes:** Does not provide a complete networking solution.
- **OpenShift:** Provides a complete networking solution.

# Container-Image Management

- **Kubernetes:** Integrates with the Docker registry for container-image management.
- **OpenShift:** Offers an integrated image registry called Image Streams, facilitating easier and more secure management of container images. It also offers templates and CI/CD capabilities.

# Updates

- **Kubernetes:** Allows multiple upgrades by invoking the `kubeadm upgrade` command.
- **OpenShift:** Difficult to perform multiple upgrades. To install the most recent version of OpenShift, before upgrading Kubernetes, you need to access the Red Hat Enterprise Linux package management system. Be sure to backup all existing installation files.

# Security

- **Kubernetes:** Utilizes concepts like Network Policies for network security and Role-Based Access Control (RBAC) for access control.
- **OpenShift:** Implements a security model based on Kubernetes but adds additional layers such as Security Context Constraints (SCC) and OAuth for enhanced security.

# Router vs Ingress

- **Kubernetes:** Utilizes Ingress resources to expose HTTP and HTTPS routes from outside the cluster to services within the cluster.
- **OpenShift:** Uses a routing layer built on top of Kubernetes Ingress, known as OpenShift Router, to route external traffic to internal services. It offers additional features like session affinity, TLS termination, and more.

# Integrated CI/CD

- **Kubernetes:** Provides building blocks for CI/CD pipelines, but users typically need to integrate third-party tools or create custom solutions.
- **OpenShift:** Offers integrated CI/CD capabilities through features like Source-to-Image (S2I), Jenkins pipelines, and built-in integration with Git repositories. It simplifies the process of building, deploying, and managing applications.

# Templates & Helm

- **Kubernetes:** Utilizes Helm, a package manager for Kubernetes, to define, install, and manage applications as Helm charts.
- **OpenShift:** Provides similar capabilities with its built-in template system, allowing users to define reusable application templates containing configuration parameters. It simplifies application deployment and management tasks.

It's worth noting that OpenShift builds on top of Kubernetes, providing additional features and functionalities tailored for enterprise needs. The choice between Kubernetes and OpenShift depends on factors such as the level of support, ease of installation, user interface preferences, and specific requirements of the organization.

# openshift

- Red Hat considers Kubernetes as the kernel of its distributed platform, and OpenShift as the distribution.
- OpenShift uses two primary tools to serve applications in containers:

 1. a container runtime to create containers in Linux:
        A container runtime works on a Linux server to create and manage containers.
 2. an orchestration engine to manage a cluster of servers running containers

- In OpenShift, the service that handles the creation and management of containers is docker
- The resources that docker uses to isolate processes in containers all exist as part of the Linux kernel.
These resources include things like SELinux, Linux namespaces, and control groups (cgroups),
- Applications running inside a container can only access the resources in the container.
  - The applications in the container are isolated from anything running in other containers or on the host.
  - Five types of resources are isolated with containers:
     1. Mounted filesystems
     2. Shared memory resources
     3. Hostname and domain name
     4. Network resources (IP address, MAC address, memory buffers)
     5. Process counters

        kubernetes                                                             openshift

- **Platform Support:** can be installed on almost any Linux distribution       Red Hat CoreOS for the masternodes , CoreOS or RHEL for workernodes

- **Installation:** offers a variety of installation tools, including kubeadm, kops,    OpenShift has different installation procedures for different versions
    and kube-spray. Some tools are designed especially for the cloud

- **User Interface:** a complex web-based interface, which is not generally recommended   web-based console that comes with a one-touch login page.
    for novices. To access the interface, users need to first install       The OpenShift console provides a simple form-based interface
    the official Kubernetes Dashboard and then forward the port address  that enables users to easily change, delete, and add resources.
    of their local machine to the cluster server by using kube-proxy.
    However, the dashboard does not have a login page

- **Updates:** lets you perform multiple upgrades,difficult to perform mulyiple upgrades.
    you only need to invoke the kubeadm upgrade command, To install the most recent version of OpenShift,Before upgrading Kubernetes, you need to access the Red Hat Enterprise Linux package management system.be sure to backup all existing installation files.

- **Networking:**   does not provide a complete networking solution provide a complete networking solution Container- -Image Management; Kubernetes integrates with the Docker registry.    OpenShift offers the use of an integrated image registry called Image Streams kubernetes does not provide a dedicated resource that  which enables easier, more secure management of container images.can help you manage the workflow of building container images.  This registry offers a console that allows users to search for Kubernetes users build images using the Docker build command. information about image streams and images within a cluster.Image Streams lets users download entire images and locally modify them without having to use external tools
