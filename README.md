# WatchTower
[![CircleCI](https://circleci.com/gh/andela/watch-tower.svg?style=svg&circle-token=c0f65666b41a946385c269ad91ce903c4153e1eb)](https://circleci.com/gh/andela/watch-tower)
[![Maintainability](https://api.codeclimate.com/v1/badges/c8aca378abb90a557401/maintainability)](https://codeclimate.com/repos/5bb35f15e2f86a74e2005f45/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c8aca378abb90a557401/test_coverage)](https://codeclimate.com/repos/5bb35f15e2f86a74e2005f45/test_coverage)


WatchTower is a tool used to automate performance tracking and management within the D0B space.

This repo holds the code for the frontend of WatchTower


### How to run tests
  * Navigate to the project root directory in your console
  * Run `yarn test` - to test the app


## Setup(mac)
### Prerequisites

- [docker](https://docs.docker.com/)
- docker-compose

After installing the prerequisites, clone the repository:
```
$ git clone https://github.com/andela/watch-tower.git
```
Then change the directory to the repository:
```
$ cd WATCH-TOWER
```
#### Setting up a local url
This will add `127.0.0.1  watchtower-dev.andela.com` to the hosts file.
This only needs to be run at the initial setup.
```
$ make set-url
```
#### Running tests
```
$ make test
```
#### Starting local development server
```
$ make start
```
after starting the local development server, application can be accessed at:
```
watchtower-dev.andela.com:3000
```




  
