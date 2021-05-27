#!/bin/bash
docker run -d --name apache-static-01 res-http/apache-php-01
docker run -d --name apache-static-02 res-http/apache-php-02
docker run -d --name express-dynamic-01 res-express
docker run -d --name express-dynamic-02 res-express
