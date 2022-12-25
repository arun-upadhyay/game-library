# game-library (CRUD Operation)
This application consists of the back end (developed in core PHP) for HTTP Rest API and React JS (with redux) for the front end.
How to run this application:
BackEnd API
1. git clone https://github.com/arun-upadhyay/game-library.git game-library
2. cd game-library/back-end-api
3. run `composer install`
4. Install MySQL server. 
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=game_library
DB_USERNAME=root
DB_PASSWORD=
It would be best if you had PHP7 in your machine
4. Run the PHP server on the local machine as `php -S 127.0.0.1:8000`
5. You can run the unit test to make sure that API is working as expected:
`php vendor/bin/phpunit tests/GameTest.php`

Front End:
1. Install node package manager NPM in your environment. 
2. cd game-library/front-end
3. run 'npm install'
4. run `npm start`
Your front-end can access `http://127.0.0.1:3000/` and API endpiont should be http://127.0.0.1:8000/

# List all containers (only IDs)
docker ps -aq
# Stop all running containers
docker stop $(docker ps -aq)
# Remove all containers
docker rm $(docker ps -aq)
# Remove all images
docker rmi $(docker images -q)

# Run docker composer as 
<<<<<<< HEAD
docker-compose -f docker-composer.yml up

Step 2: Execute docker
Run container

docker-compose up -d --build
this may take a moment. After the container has been setup, check the status with

docker-compose ps
you should see three containers are running.

Step 3: Install Composer dependencies
Bash into your container:

docker-compose exec app bash
Install composer dependencies (this may also take a moment):
cd /var/www/public
composer install

Congratulations. Your app should now be accessible under http://localhost:8005

=======
docker-compose -f docker-composer.yml up
>>>>>>> 59d4845... Added composer file

Reference:
https://github.com/truthseekers/php-docker-simple
https://github.com/ggelashvili/learnphptherightway-project/tree/2.1
