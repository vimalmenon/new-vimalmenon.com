CREATE TABLE tutorials (
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR (100) NOT  NULL,
   tutorial_id VARCHAR (50) NOT NULL,
   published_date VARCHAR (50) NOT NULL,
   topic_id int signed null,
   sequence int signed null,
   PRIMARY KEY (id),
   CONSTRAINT UN_VIDEOS_VIDEO_ID UNIQUE(tutorial_id),
   FOREIGN KEY (topic_id) REFERENCES topics(id)
);

insert into tutorials (name, tutorial_id, published_date, topic_id) 
select "05 - HTML Form and Form Elements - Part I", "6W7j9jIbZOg", "Jan 8, 2021", id from topics where name="HTML Tutorials";
insert into tutorials (name, tutorial_id, published_date, topic_id) 
select "04 - HTML Table", "_SncHYzpL5o", "Jan 1, 2021", id from topics where name="HTML Tutorials";
insert into tutorials (name, tutorial_id, published_date, topic_id)  
select "03 - HTML DOCTYPE and More tags", "BWwT8Qg8kow", "Dec 27, 2020", id from topics where name="HTML Tutorials";
insert into tutorials (name, tutorial_id, published_date, topic_id) 
select "02 - More HTML tags and attributes", "iyrdiFVaVtc", "Aug 16, 2020", id from topics where name="HTML Tutorials";
insert into tutorials (name, tutorial_id, published_date, topic_id) 
select "01 - Introduction to HTML", "kAHzqg7AVcs", "Aug 9, 2020" , id from topics where name="HTML Tutorials";
insert into tutorials (name, tutorial_id, published_date, topic_id) 
select "Web development Introduction & Basic Concepts for Beginners", "Jg-FAIH2yf4", "Aug 9, 2020", id from topics where name="Others";
insert into tutorials (name, tutorial_id, published_date, topic_id) 
select "01 - Introduction to Git and GitHub", "DwRpOkmw33g", "Aug 22, 2020", id from topics where name="Others";
insert into tutorials (name, tutorial_id, published_date, topic_id) 
select "Introduction to My Channel", "Wb1uty_bc3c", "Apr 24, 2020", id from topics where name="Others";