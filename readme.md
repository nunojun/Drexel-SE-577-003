
# Drexel-SE-577-003: Software Architecture in Spring 2021-2022

## Project Release No.3
### Introduction
From the previous release no.2, we have 2 applications in separated directories, ** client** and **server**.  
The goal of this release no.3 is,
1. Dockerize **client** and **server** applications.
	- Create Dockerfiles & build docker images.
2. Run & stop each application respectively by using `docker` command.
3. Run & stop both applications together as one service by using `docker-compose` command.
4. Create a makefile that covers every process above.

> **Note**   
All the commands below are based on the `make` command.  
For more details, please refer to the [makefile](makefile).

### "How-to" steps
#### Prerequisites
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
#### Build docker image(s)
These are the list of commands to build & remove docker images.  
```shell
$ make build-docker-client		// to build client docker image
$ make build-docker-server		// to build server docker image
$ make build			// to build client & server docker images
$ make clean-docker-client		// (optional) to remove client docker image
$ make clean-docker-server		// (optional) to remove server docker image
$ make clean-docker		// (optional) to remove client & server docker image
```
#### Run docker container(s)
Once the docker images are prepared, you are ready to run the containers.
You can run **client** and **server** respectively, or you can run them together.
> **NOTE**  
When you run them separately, `docker run` is used.  
When you run them together, `docker compose` is used.  
```shell
$ make run-docker-client		// to run client only
$ make run-docker-server		// to run server only
$ make up-docker-compose		// to run client & server
$ make down-docker-compose		// to stop client & server
```
