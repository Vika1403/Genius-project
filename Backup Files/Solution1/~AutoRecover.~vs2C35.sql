--CREATE DATABASE Cinema;
CREATE TABLE Halls ( 
	Hall_code INT NOT NULL UNIQUE , 
	Hall_name VARCHAR(30) NOT NULL,
	Seats_number INT NOT NULL );

	CREATE TABLE Sessions ( 
	Sessione_code INT NOT NULL UNIQUE , 
	Hall_code INT NOT NULL,
	Seats_number INT NOT NULL );