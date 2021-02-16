CREATE TABLE contents (
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR (100) NOT NULL,
   title VARCHAR (100) NOT NULL,
   is_json int signed DEFAULT 0,
   CONSTRAINT UN_CONTENTS_NAME UNIQUE(name),
   PRIMARY KEY (id)
);

INSERT into contents (name, title)
values("privacy-policy", "Privacy Policy for Vimal Menon");


INSERT into contents (name, title)
values("contact", "Contact Us");


INSERT into contents (name, title, is_json)
values("release", "Release and Features",1);

INSERT into contents (name, title, is_json)
values("about-me", "About Me", 1);


INSERT into contents (name, title, is_json)
values("announcements", "Announcements", 1);

INSERT into contents (name, title, is_json)
values("others", "others", 1);