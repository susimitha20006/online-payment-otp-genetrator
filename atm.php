CREATE DATABASE atm_db;
USE atm_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    pin VARCHAR(10) NOT NULL,
    balance DECIMAL(10,2) DEFAULT 0.00
);

INSERT INTO users (username, pin, balance)
VALUES ('susi', '1234', 5000.00);