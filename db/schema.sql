CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burgerName VARCHAR (100) NOT NULL,
    isDevoured BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (id)
);