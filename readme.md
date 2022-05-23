
# Drexel-SE-577-003: Software Architecture in Spring 2021-2022

## Project Release No.3
> **Note**   
This document contains the instruction of "how-to" only.
For more details on the architecture, please refer to [Release3.md](Release3.md).
### Basic Instructions
#### Quick Start Guide
This is the steps you can follow, as assuming you start this from scratch.  
##### Build and Run
After the following steps finished, you can launch the application from a web browser with the URL http://localhost:8080.
1. Build **client** and **server** applications.
```shell
$ make build
```
2. Build the docker images of **client** and **server**
```shell
$ make build-docker
```
3. Run **client** and **server** applications (by using `docker-compose` internally).
```shell
$ make up-docker-compose
```
##### Clean up
1. Stop **client** and **server** applications (by using `docker-compose` internally).
```shell
$ make down-docker-compose
```
2. Remove everything from your local, including all the binaries and docker images.
```shell
$ make clean && make clean-docker
```
#### Details on Makefile
> **Note**   
All the commands below are based on the `make` command.  
For more details, please refer to the [makefile](makefile).
##### Prerequisites
Before you dive into dockerizing, the required binaries should be created ahead.  
Please refer to the commands below for creating them.  
```shell
$ make build-client			// to build client
$ make build-server			// to build server
$ make build				// to build client & server
$ make clean-client			// (optional) to remove client
$ make clean-server			// (optional) to remove server
$ make clean				// (optional) to remove client & server
```
##### Build docker image(s)
These are the list of commands to build & remove docker images.  
```shell
$ make build-docker-client		// to build client docker image
$ make build-docker-server		// to build server docker image
$ make build-docker		        // to build client & server docker images
$ make clean-docker-client		// (optional) to remove client docker image
$ make clean-docker-server		// (optional) to remove server docker image
$ make clean-docker		        // (optional) to remove client & server docker image
```
##### Run docker container(s)
Once the docker images are prepared, you are ready to run the containers.
You can run **client** and **server** respectively, or you can run them together.
> **Note**  
When you run them separately, `docker run` is used.  
When you run them together, `docker compose` is used.  
```shell
$ make run-docker-client		// to run client only
$ make run-docker-server		// to run server only
$ make up-docker-compose		// to run client & server
$ make down-docker-compose		// to stop client & server
```