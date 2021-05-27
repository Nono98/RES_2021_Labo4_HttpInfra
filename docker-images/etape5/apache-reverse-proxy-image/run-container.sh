#!/bin/bash
docker run -d --name apache-static res-http/apache-php
docker run -d --name express-dynamic res-express
