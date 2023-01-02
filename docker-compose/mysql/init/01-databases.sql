# create local_developer user and grant rights
CREATE USER 'local_developer'@'db' IDENTIFIED BY 'secret';
GRANT ALL PRIVILEGES ON *.* TO 'local_developer'@'%';

# create databases
CREATE DATABASE IF NOT EXISTS `local_db`;
CREATE TABLE `local_db`.`game` (
                                        id int NOT NULL AUTO_INCREMENT,
                                        title varchar(255) NOT NULL,
                                        rating varchar(255),
                                        review varchar(255),
                                        last_played datetime,
                                        PRIMARY KEY (id)

);

INSERT into `local_db`.`game` (title, rating, review, last_played) VALUES ('Sample Game', '5','Outstanding','2022-12-21 00:00:00');
