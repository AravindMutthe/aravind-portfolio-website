### Container Images

- Container images are templates from which containers are created.
- Each individual layer contains files and folders.
- Each layer only contains the changes to the filesystem with respect to the underlying layers.
- **Docker uses a Union filesystem.**
- These images are not made up of just one monolithic block but are composed of many layers.

##### Mastering Containers —

- To create a virtual filesystem out of the set of layers.
- A storage driver handles the details regarding the way these layers interact with each other.
- Different storage drivers are available that have advantages and disadvantages in different situations.

## 1. Managing Ports

- Images -> Builds -> Containers -> Applications.
- Containers themselves have port numbers.
- If you want to access an application inside a container via a port number, you need to map the port number of the container to the port number of the Docker host.

```sh
   > sudo docker inspect PCM #Gives all port details
   > sudo docker run -p docker_host_port_num:container_port_num container/image
   > Example: 
   > sudo docker run -p 8080:8080 -p 50000:50000 pcm
```

## 2. Dockerfile

**Instruction commands:**

1. **CMD:** Used to execute a command at runtime when the container is executed.
   - Syntax: `CMD command param1`
     - Command to run when the container is launched.
     - Param1 entered to the command.

2. **ENTRYPOINT:** This also used to execute commands at runtime for the container, it's more flexible than CMD.
   - Syntax: `ENTRYPOINT command param1`

3. **ENV:** Used to set environment variables in the container.
   - Syntax: `ENV key value`
     - Key for the environment variable.
     - Value for the environment variable.

4. **WORKDIR:** Used to set the working directory for the container.
   - Syntax: `WORKDIR dirname`
     - Dirname: New working directory, if it doesn't exist, it will be added.

## 3. Storage Drivers

- Docker has multiple storage drivers.
- Storage drivers allow one to work with underlying storage devices.
- Different storage drivers include:
  1. Overlay
  2. AUFS
  3. Btrfs

## 4. Data Volumes

**2 ways to manage data in Docker:**

1. **Data Volume:** Designed directory in the container.
2. **Data Volume Container:** Docker has a separate volume that is shared across containers, known as data volumes.

**Features:**

- They are initialized when the container is created.
- They can be shared and reused amongst many containers.
- Any changes to the volume can be made directly.
- They exist even if the container is deleted.

##### Creating a Volume
   >
   > `docker volume create --name=volumename --opt options`
   >
   > - Name: Name of volume
   > - Opt: Options

   `docker volume ls`: Lists all volumes.

## 5. Networking

Containers can communicate with other containers and also with the Docker host.

   > `docker network ls`: Lists all networks associated with Docker on the host.

## 6. Logging

- Container logging:
   > `docker run -it container/image bash`

## 7. Docker Compose

Used to run multiple containers as a single service.

**Example:** If you have an app that requires NGINX and MySQL, you could create one file to start both containers as a service.

**Installation:**

- Download necessary files from GitHub.
- Provide executive privileges to the Docker Compose file (`chmod +x /../../docker-compose`).
- Verify with `sudo ./docker-compose --version`.

**Creating Docker Compose file:**

```yaml
version: 2
services:
  databases:
    image: mysql
    ports:
      - "3306:3306"
    environment:
      - MYSQL_ROOT_PASSWORD=password
  
  web:
    image: nginx
```

> sudo ./docker-compose up (It starts building containers as a single service)

## 8.Kubernetes

Kubernetes is an orchestration framework for Docker containers that helps expose containers as services to the outside world.

**Example:**
Suppose we have 2 services:

- One service contains NGINX and MongoDB.
- Another service contains NGINX and Redis.
Each service can have an IP or service point which can be connected by other applications.
Kubernetes is used to manage these services.

**Summary:**

- **Image -> Builds -> Containers**
  - Container-1 (has port) runs (application) accessed via Docker host port number.
  - Container-2 (has port) runs (application).
  
- **Docker Compose = runs containers as a service.**
  - **Service = multiple containers as a single one.**
    - Service-1 = c1, c2.
    - Service-2 = c3, c4, c1.

- **Kubernetes = manages multiple services.**
  - Kubernetes = Service-1, Service-2.
  
**Worker Node: On which all services run**

- We can have many worker nodes running at one point in time (cluster).
- Each worker node hosts one or more pods.
- A POD is like hosting a service.
- Each POD contains one or more Docker containers.
- Each POD can host a different set of Docker containers.
- Proxy used to control the exposing of these services to the outside world.

**Summary:**

- **Service-1 (POD) contains ---> one or more Docker containers.**
- **Service-2 (POD) contains ---> one or more Docker containers.**
- **Worker Node runs all services.**
- **Wn-1 hosts one or more services (POD).**
- **Wn-2 hosts one or more services (POD).**
- **Cluster runs many worker nodes together to distribute the workload, clustering helps in fault tolerance.**
- **Kube-proxy controls services exposing.**

**Components:**

1. **Etcd:** Used to store shared config and service discovery.
   - Various apps will be able to connect to the services via service discovery.

2. **Controller Manager:** Used to control Kubernetes services.

3. **Scheduler:** Used to schedule the containers on hosts, which assigns Pods to Nodes.

4. **API Server:** Used to orchestrate the Docker containers.

5. **Kubelet:** Used to control the launching of containers via manifest files.

6. **Kub-proxy:** Used to provide network proxy services to the outside world.
