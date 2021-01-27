CREATE TABLE data (
   id INT NOT NULL AUTO_INCREMENT,
   content text NOT NULL,
   type ENUM ("short", "full") DEFAULT "full",
   last_updated VARCHAR (50) NOT NULL,
   content_id int signed NOT NULL,
   is_active TINYINT NOT NULL,
   FOREIGN KEY (content_id) REFERENCES contents(id),
   PRIMARY KEY (id)
);

INSERT into data (content, last_updated, content_id, is_active)
select "This is test", "27th jan", id, 0 from contents where name = "test";


INSERT into data (content, last_updated, content_id, is_active)
select "This is test 2", "27th jan", id, 0 from contents where name = "test";


INSERT into data (content, last_updated, content_id, is_active)
select "This is test 3", "27th jan", id, 0 from contents where name = "test";