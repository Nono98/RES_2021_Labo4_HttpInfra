#!/bin/bash
cd ../apache-php-image-01
./build-images.sh
cd ../apache-php-image-02
./build-images.sh
cd ../express-image
./build-images.sh
cd ../apache-reverse-proxy-image
docker build -t res-apache-rp .
