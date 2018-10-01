# Project variables
PROJECT_NAME ?=
TARGET_MAX_CHAR_NUM=10
# File names
DOCKER_DEV_COMPOSE_FILE := docker/dev/docker-compose.yml

.PHONY: help

## Show help
help:
	@echo ''
	@echo 'Usage:'
	@echo '${YELLOW} make ${RESET} ${GREEN}<target> [options]${RESET}'
	@echo ''
	@echo 'Targets:'
	@awk '/^[a-zA-Z\-\_0-9]+:/ { \
		message = match(lastLine, /^## (.*)/); \
		if (message) { \
			command = substr($$1, 0, index($$1, ":")-1); \
			message = substr(lastLine, RSTART + 3, RLENGTH); \
			printf "  ${YELLOW}%-$(TARGET_MAX_CHAR_NUM)s${RESET} %s\n", command, message; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
	@echo ''

build-image:
	@ ${INFO} "Building required docker images"
	@ docker-compose -f $(DOCKER_DEV_COMPOSE_FILE) build web
	@ ${INFO} "Build Completed successfully"
	@ echo " "

## Set local url on mac
set-url:
	@ ${INFO} "Updating hosts file"
	@ echo "127.0.0.1  watchtower-dev.andela.com" | sudo tee -a /etc/hosts
	@ ${INFO} "Update completed successfully"

## Start local development server
start:build-image
	@ ${INFO} "Starting local development server"
	@ docker-compose -f $(DOCKER_DEV_COMPOSE_FILE) run --rm --service-ports web yarn start

## Run project test cases
test:build-image
	@ ${INFO} "Running tests in docker container"
	@ docker-compose -f $(DOCKER_DEV_COMPOSE_FILE) run --rm web yarn test

## Ssh into service container
ssh:build-image
	${INFO} "Opening web container terminal"
	@ docker-compose -f $(DOCKER_DEV_COMPOSE_FILE) run --rm --service-ports web bash

## Stop local development server containers
stop:
	${INFO} "Stop development server containers"
	@ docker-compose -f $(DOCKER_DEV_COMPOSE_FILE) down -v
	${INFO} "All containers stopped successfully"

## Remove all images
clean:
	${INFO} "Cleaning your local environment"
	${INFO} "Note: All ephemeral volumes will be destroyed"
	@ docker-compose -f $(DOCKER_DEV_COMPOSE_FILE) down -v
	@ docker images -q -f label=application=$(PROJECT_NAME) | xargs -I ARGS docker rmi -f ARGS
	${INFO} "Removing dangling images"
	@ docker system prune
	${INFO} "Clean complete"

  # COLORS
GREEN  := $(shell tput -Txterm setaf 2)
YELLOW := $(shell tput -Txterm setaf 3)
WHITE  := $(shell tput -Txterm setaf 7)
NC := "\e[0m"
RESET  := $(shell tput -Txterm sgr0)
# Shell Functions
INFO := @bash -c 'printf $(YELLOW); echo "===> $$1"; printf $(NC)' SOME_VALUE
SUCCESS := @bash -c 'printf $(GREEN); echo "===> $$1"; printf $(NC)' SOME_VALUE
