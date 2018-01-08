#!/usr/bin/env bash

docker-compose -f sel.yml up -d
docker-compose run --rm nightwatch
docker-compose down
