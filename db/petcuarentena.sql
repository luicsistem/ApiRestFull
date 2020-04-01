create database petcorona;
use petcorona;

CREATE TABLE  employees
 (id int(12) NOT NULL primary key auto_increment ,
 image varchar(100) NOT NULL, 
 name varchar(30) NOT NULL, 
 title varchar(100) NOT NULL,
 description varchar(300)  not null, 
 score int(8) NOT NULL, 
 address varchar(100) NOT NULL
);

describe employees;

select * from employees;

DELETE FROM employees WHERE  id = 5;