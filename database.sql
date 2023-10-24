CREATE DATABASE IF NOT EXISTS mailleur_box;
USE mailleur_box;
CREATE TABLE IF NOT EXISTS user (
    customerId INT PRIMARY KEY,
    subscriptionType VARCHAR(255),
    dateRegistered DATE,
    country VARCHAR(255),
    provider VARCHAR(255),
    postalCode VARCHAR(20),
    name VARCHAR(255),
    phoneNumber VARCHAR(20),
    paymentMethod VARCHAR(255),
    subscriptionPeriod INT
);
