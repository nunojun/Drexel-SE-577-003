SHELL := /bin/bash

.PHONY: build-client
build-client:
	cd ./client && npm install && quasar build

.PHONY: build-server
build-server:
	cd ./server && npm install

.PHONY: build
build:
	cd ./client && npm install && quasar build
	cd ./server && npm install

.PHONY: build-docker-client
build-docker-client:
	cd ./client && docker build -t nunojun/se577-client:0.0.1 -t nunojun/se577-client:latest .

.PHONY: build-docker-server
build-docker-server:
	cd ./server && docker build -t nunojun/se577-server:0.0.1 -t nunojun/se577-server:latest .

.PHONY: build-docker
build-docker:
	cd ./client && docker build -t nunojun/se577-client:0.0.1 -t nunojun/se577-client:latest .
	cd ./server && docker build -t nunojun/se577-server:0.0.1 -t nunojun/se577-server:latest .

.PHONY: clean-client
clean-client:
	rm -rf ./client/dist ./client/node_modules

.PHONY: clean-server
clean-server:
	rm -rf ./server/node_modules

.PHONY: clean
clean:
	rm -rf ./client/dist ./client/node_modules ./server/node_modules

.PHONY: clean-docker-client
clean-docker-client:
	docker rmi -f nunojun/se577-client:0.0.1
	docker rmi -f nunojun/se577-client:latest

.PHONY: clean-docker-server
clean-docker-server:
	docker rmi -f nunojun/se577-server:0.0.1
	docker rmi -f nunojun/se577-server:latest

.PHONY: clean-docker
clean-docker:
	docker rmi -f nunojun/se577-client:0.0.1
	docker rmi -f nunojun/se577-client:latest
	docker rmi -f nunojun/se577-server:0.0.1
	docker rmi -f nunojun/se577-server:latest

.PHONY: run-client
run-client:
	cd ./client && quasar dev

.PHONY: run-server
run-server:
	cd ./server && npm run dev

.PHONY: run-docker-client
run-docker-client:
	docker run --publish 8080:80 nunojun/se577-client

.PHONY: run-docker-server
run-docker-server:
	docker run --publish 5000:5000 nunojun/se577-server

.PHONY: up-docker-compose
up-docker-compose:
	docker-compose up -d

.PHONY: down-docker-compose
down-docker-compose:
	docker-compose down
