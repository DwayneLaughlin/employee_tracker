DROP DATABASE IF EXISTS worker_db;
CREATE DATABASE worker_db;
USE worker_db;

CREATE TABLE department (
	id INT NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30),
    PRIMARY KEY (id)
    );
    
CREATE TABLE role (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL (8,2),
    department_id INT,
    PRIMARY KEY (id)
    );
    
CREATE TABLE employee (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);

INSERT INTO role (title, salary, department_id)
VALUES ("reception", 40000, "administrative");

INSERT INTO role (title, salary, department_id)
VALUES ("call rep", 50000, "sales");

INSERT INTO role (title, salary, department_id)
VALUES ("call rep", 52000, "collections");

INSERT INTO department (dept_name)
VALUES ("collections");

INSERT INTO department (dept_name)
VALUES ("sales");

INSERT INTO department (dept_name)
VALUES ("administrative");
-- FOR DISPLAYING TABLES
SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;

-- FOR CLEARING TABLES OF UNNECESSARY TEST JARGON
TRUNCATE TABLE employee;
TRUNCATE TABLE role;
TRUNCATE TABLE department;