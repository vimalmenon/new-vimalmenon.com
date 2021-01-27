CREATE TABLE contents (
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR (100) NOT NULL,
   CONSTRAINT UN_CONTENTS_NAME UNIQUE(name),
   PRIMARY KEY (id)
);

INSERT into contents (name)
values("test");