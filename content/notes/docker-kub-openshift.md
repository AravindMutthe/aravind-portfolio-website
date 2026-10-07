### Container-images
- Container images are templates from which containers are created.
- Each individual layer contains files and folders. 

- Each layer only contains the changes to the filesystem with respect to the underlying layers. 
- ***Docker uses a Union filesystem.***
- These images are not made up of just one monolithic block but are composed of many layers.

##### Mastering Containers — 
- to create a virtual filesystem out of the set of layers. 
- A storage driver handles the details regarding the way these layers interact with each other. 
- Different storage drivers are available that have advantages and disadvantages in different situations.

## 1. Manageing ports:

- image->builds-> containers -> have -> applications.
- containers themselves have port num.
- if you want access application inside container via port num, you need to map PORT NO OF CONTAINER  to the PORT NO OF DOCKER HOST.
 
 > sudo docker inspect PCM         // gives all port details
 > sudo docker run -p docker host port num -p container port num container/image-
 > sudo docker run -p 8080:8080 -p 50000:50000 pcm
 
## 2. DOCKER FILE:
**Instruction commands:**
1. CMD: used to execute a cmnd at runtime when the container executed.
> syntax: CMD command param1
> comand to run when conatainer launched,
> param1 enterted to the command.
2. ENTRYPOINT:This also used to execute cmnds at runtime for conatainer, its more flexible than CMD
>syntax: CMD command param1
3. ENV: used to set env variables in the conatainer.
> ENV key value
    - key for the env variables.
	- value for the env variables.
4. WORKDIR:used to set working dir for the conatainer.
    - WORKDIR dirnmae
	- dirnmae: new working dir,if it doesnt exist, it will be added
	 
	 
## 3. STORAGE Drivers:
- docker has multiple storage drivers 
- storage driver allow one to work with underlying storage devices,
- diff storage drivers,
    1. overlay
    2. aufs
    3. brtfs
## 4. DATA Volumes:

**2 ways to manage data in  docker** 

1. Data volume: designed dir in container
2. Data volume container: docker has separate volume , that has shared accross container, these are know as data volumes

**features:**

- they are initialized when conatainer is created.
- they can be shared and reused amongst many containers.
- any changes to the valome can be made directly.
- they exist even container is deleted.

##### creating a volume:
> docker volume create --name=volumename --opt options
>  name: name of valome
>  opt:
 
 docker volume ls: list all volumes
 
## 5. NETWORKING:

container can communicate with other container and also with docker host.

> docker network ls: lists all networks associated with docker on the host



## 6. LOGING:
- conatainer loging: 
> docker run -it container/image bash
 
## 7. DOCKER COMPOSE: used to run multiple containers as a single service.

ex: you have a app which required NGNIX and MYSQl, u could create one file, which could start both containers as a service.

installation:
 download necessory file from github
 provide executive privilliges to docker compose file (chmod +x /../../docker-compose)
 verify with sudo ./docker-compose  -version
 
**creating docker compose file.**

> sudo vi docker-compose.yml
	
	version 2
	Services
		databases
			image mysql
			ports:
			- "3306:3306"
			environment:
			-MYSQL_ROOT_PSSWRD:password
			
			
		web
			image: ngnix

> sudo ./docker-compose up(it starts buliding containers as a single service)
	
## 8.KUBERNETEES:
kubernetees is an orchestration framework for docker containers which helps expose containers as services to the outside world.
***ex: we have 2 services***
- one service would contain ngnix nd mangoDB another contain  ngnix nd redis
- each service can have ip or service point which can be connected by other applications.
-  kubernetees used to manage these services.
**SUMMERY**	   
- image -> builds-> containers
    - container-1(has port) ---runs>(application) it accesd via docker host port num
	- container-2(has port) ---runs>(application)
	   
- docker compose= runs containers as a service.
- service= multiple containers as single one
	- service-1= c1,c2
	- service-2= c3,c4,c1
- kubernetees=manages multiple services.
	- kubernetees= service-1, service-2
	   
###### Worker node: on wch all services run
- We can have many worker nodes running at one point in time(cluster)
- Each worker  node hosts one or more pod.
- POD is like hosting a service
- Each POD contains one or more docker containers
- Each POD can host diff set of Docker containers  
- Proxy used to control the exposing of these services to the outside world


**SUMMERY:**

- Service-1(POD)-> contains---> one or more Docker containers 
- Service-2(POD)-> contains---> one or more Docker containers 
- Worker Node-> runs--> all services
- Wn-1-> host--> one or more service(POD)
- Wn-2-> host--> one or more service(POD)
- Cluster-> runs--> many worker nodes works together to distribute the work load,clustering helps in fault tolerance
- Kube-proxy-> controls--> services exposing

**COMPONENTS:**

1. Etcd: used to store shared config and service discovery 
    - Various apps will able connect to the services via service discovery
2. Controller-mngr: used to control kubernetes services
3. Scheduler: used schedule the containers on hosts.which assigns Pods to Nodes.
4. Api-server: used orchestrate the docker containers.
5. Kublet: used to control the launching of containers via manifest files
6. Kub-proxy:  used to provide network proxy services to the outside world









