#!/bin/bash
docker run -d --name apache-static res-http/apache-php
docker run -d --name express-dynamic res-express
docker run -d -p 9093:80 --name apache-rp res-apache-rp
