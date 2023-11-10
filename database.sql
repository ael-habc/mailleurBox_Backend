-- Create database
CREATE DATABASE IF NOT EXISTS mydatabase;
USE mydatabase;

-- Create user table
CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fournisseur VARCHAR(255),
    adresse VARCHAR(255),
    nom VARCHAR(255),
    prenom VARCHAR(255),
    email VARCHAR(255) UNIQUE
);

-- Sample data (optional)
-- INSERT INTO user (fournisseur, adresse, nom, prenom, email) VALUES ('Supplier 1', '123 Main St', 'John', 'Doe', 'john.doe@example.com');
-- INSERT INTO user (fournisseur, adresse, nom, prenom, email) VALUES ('Supplier 2', '456 Elm St', 'Jane', 'Smith', 'jane.smith@example.com');
-- ... add more records as needed
