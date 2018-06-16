DROP DATABASE IF EXISTS mysql_n_app_filter_listings;

CREATE DATABASE mysql_n_app_filter_listings;

USE  mysql_n_app_filter_listings; 

DROP TABLE IF EXISTS roomlist;

CREATE TABLE roomlist (
  id int NOT NULL AUTO_INCREMENT,
  roomname varchar (50) NOT NULL,
  price int NOT NULL,
  numberOfBedrooms int NOT NULL,
  rating int NOT NULL,
  numberOfReviews int NOT NULL,
  roomType varchar (20) NOT NULL,
  instantBook varchar (1) NOT NULL,
  PRIMARY KEY(id)
);

DROP TABLE IF EXISTS images;

CREATE TABLE images (
  id int NOT NULL AUTO_INCREMENT,
  urlToImage varchar(255) NOT NULL,
  roomId int NOT NULL,
  PRIMARY KEY(id)
);

ALTER TABLE images ADD FOREIGN KEY (roomId) REFERENCES roomlist (id);
