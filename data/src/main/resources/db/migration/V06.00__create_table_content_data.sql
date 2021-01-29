CREATE TABLE content_data (
   id INT NOT NULL AUTO_INCREMENT,
   data text NOT NULL,
   type ENUM ("short", "full") DEFAULT "full",
   is_active TINYINT NOT NULL,
   last_updated VARCHAR (50) NOT NULL,
   content_id int signed NOT NULL,
   FOREIGN KEY (content_id) REFERENCES contents(id),
   PRIMARY KEY (id)
);

insert into content_data(data, is_active, last_updated, content_id)
select "vimal Menon", 1, "12 jan 2021", id from contents where name  = "test";


insert into content_data(data, is_active, last_updated, content_id)
select "Test Menon", 1, "12 jan 2021", id from contents where name  = "test";


insert into content_data(data, is_active, last_updated, content_id)
select "Creating", 1, "12 jan 2021", id from contents where name  = "test";