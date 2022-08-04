# Auth example

This repository contains a simple app for experimenting with authentication and authorisation.

## Structure

- The `api` folder contains an Express API.
- The `db` folder contains the setup files for a Postgres database that the API connects to.
- The `client` folder contains a simple front-end site for interacting with the API.

## Usage

Start all the containers with `./scripts/startup.sh`.

Stop them, removing all volumes and cleaning up, with `teardown.sh`.

`./scripts/reset.sh` will stop all containers (as well as doing the other clean-up) and then restart them.
