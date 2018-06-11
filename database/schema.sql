DROP DATABASE IF EXISTS rooms;

CREATE DATABASE rooms;

USE rooms;

CREATE TABLE roomlist (
  id int NOT NULL AUTO_INCREMENT,
  roomname varchar (50) NOT NULL,
  price int NOT NULL,
  numberOfBedrooms int NOT NULL,
  rating int NOT NULL,
  numberOfReviews int NOT NULL,
  urlToImage varchar(255) NOT NULL,
  roomType varchar (20) NOT NULL,
  instantBook varchar (1) NOT NULL,
  PRIMARY KEY (id)
)
