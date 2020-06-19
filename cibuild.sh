#!/bin/bash

mvn clean package
#java -jar target/
docker-compose down
docker-compose up -d