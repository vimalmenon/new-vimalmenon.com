CREATE TABLE contents (
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR (100) NOT NULL,
   title VARCHAR (100) NOT NULL,
   CONSTRAINT UN_CONTENTS_NAME UNIQUE(name),
   PRIMARY KEY (id)
);

INSERT into contents (name, title)
values("privacy-policy", "Privacy Policy for Vimal Menon");


INSERT into contents (name, title)
values("contact", "Contact Us");
