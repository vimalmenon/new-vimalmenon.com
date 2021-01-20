CREATE TABLE subjects
(
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR (250) NOT NULL,
   PRIMARY KEY (id),
   CONSTRAINT UN_COMPONENT_NAME UNIQUE (name)
);

INSERT INTO subjects (name) values ("HTML Tutorials");