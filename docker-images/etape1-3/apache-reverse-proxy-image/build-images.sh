#!/bin/bash
cd ../apache-php-image
./build-images.sh
cd ../express-image
./build-images.sh
cd ../apache-reverse-proxy-image
docker build -t res-apache-rp .
