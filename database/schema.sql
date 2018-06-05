DROP DATABASE IF EXISTS rooms;

CREATE DATABASE rooms;

USE rooms;

CREATE TABLE roomlist (
  id int NOT NULL AUTO_INCREMENT,
  roomname varchar (150) NOT NULL,
  price int NOT NULL,
  numberOfBedrooms int NOT NULL,
  rating int NOT NULL,
  numberOfReviews int NOT NULL,
  urlToImage varchar(255) NOT NULL,
  PRIMARY KEY (id)
)
