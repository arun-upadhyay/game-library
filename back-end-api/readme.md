## Table of Contents

- [Setup](#setup)
    - [1. Copy files](#step-1-copy-files-in-your-directory)
    - [2. Execute Docker](#step-2-execute-docker)
    - [3. Run Composer](#step-3-install-composer-dependencies)
- [Enhancements](#enhancements)

# Setup

Its required that one has [docker-compose](https://docs.docker.com/compose/install/) on the machine installed.

## Step 1: Copy files in your directory

We assume that you add this to an existing project, as since Laravel 8 docker ships in by default.

Copy all files except `.env` and `readme.md` in your current project folder. Overwrite the credentions from your `.env` locally with those provided here. If you dont want to overwrite database name and user, then please adjust the file in `docker-compose/mysql/init/01-databaes.sql` according to your needs.

## Step 2: Crate an external docker network gateway if not already created. 
docker network ls 
docker network create game-communication-gateway

## Step 3: Execute docker

Run container

  ```sh
  docker-compose up -d --build
  ```

this may take a moment. After the container has been setup, check the status with

  ```sh
  docker-compose ps
  ```

you should see three containers are running.


## Step 4: Install Composer dependencies

Bash into your container:

  ```sh
  docker-compose exec app bash
  ```

Install composer dependencies (this may also take a moment):

 ```sh
  cd /var/www/public
  composer install
  ```

MySQL can be accessed as 
```
docker exec -it back-end-api-db-1 bash
```

Congratulations. Your app should now be accessible under `localhost:8005`

List all containers (only IDs)

 ```sh
docker ps -aq
  ```
Stop all running containers

 ```sh
docker stop $(docker ps -aq)
  ```
Remove all containers
 ```sh
docker rm $(docker ps -aq)
  ```
Remove all images
 ```sh
docker rmi $(docker images -q)
  ```

Reference: 
https://github.com/truthseekers/php-docker-simple https://github.com/ggelashvili/learnphptherightway-project/tree/2.1