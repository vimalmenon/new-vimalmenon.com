CREATE TABLE content_data_mapping (
   id INT NOT NULL AUTO_INCREMENT,
   content_id int signed NOT NULL,
   data_id int signed NOT NULL,
   FOREIGN KEY (content_id) REFERENCES contents(id),
   FOREIGN KEY (data_id) REFERENCES data(id),
   PRIMARY KEY (id)
);