CREATE TABLE topics (
    id INT NOT NULL AUTO_INCREMENT,
    topic VARCHAR (50) NOT NULL,
    content_id INT SIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (content_id) REFERENCES contents (id)
);