CREATE TABLE data (
   id INT NOT NULL AUTO_INCREMENT,
   content text NOT NULL,
   type ENUM ("short", "full") DEFAULT "full",
   is_active TINYINT NOT NULL,
   last_updated VARCHAR (50) NOT NULL,
   PRIMARY KEY (id)
);

INSERT into data (content, last_updated, is_active)
values ("This is test", "27th jan", 1);


INSERT into data (content, last_updated, is_active)
values ("This is test 2", "27th jan", 0);


INSERT into data (content, last_updated, is_active)
values ("This is test 3", "27th jan", 0);