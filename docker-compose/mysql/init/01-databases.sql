# create databases
CREATE DATABASE IF NOT EXISTS `game_library`;

# create local_developer user and grant rights
CREATE USER 'local_developer'@'db' IDENTIFIED BY 'secret';
GRANT ALL PRIVILEGES ON *.* TO 'local_developer'@'%';

CREATE TABLE `game_library`.`game` (
                                   id int NOT NULL AUTO_INCREMENT,
                                   title varchar(255) NOT NULL,
                                   rating varchar(255),
                                   review varchar(255),
                                   last_played datetime,
                                   PRIMARY KEY (id)

);
