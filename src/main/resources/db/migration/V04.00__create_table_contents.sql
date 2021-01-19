CREATE TABLE contents (
   id INT NOT NULL AUTO_INCREMENT,
   content text NOT NULL,
   type ENUM('short', 'full') NOT NULL,
   last_updated_date VARCHAR (50) NOT NULL,
   PRIMARY KEY (id),
);