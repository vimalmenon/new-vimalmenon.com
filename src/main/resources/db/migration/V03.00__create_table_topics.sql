CREATE TABLE topics (
    id INT NOT NULL AUTO_INCREMENT,
    topic VARCHAR (50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO topics (topic) values ("HTML Tutorials");
INSERT INTO topics (topic) values ("Others");