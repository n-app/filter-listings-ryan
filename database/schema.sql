DROP DATABASE IF EXISTS rooms;

CREATE DATABASE rooms;

USE rooms;

CREATE TABLE roomlist (
  id int AUTO_INCREMENT,
  roomname varchar (150),
  price int,
  numberOfBedrooms int,
  rating int,
  numberOfReviews int,
  urlToImage varchar(255),
  PRIMARY KEY (id)
)
