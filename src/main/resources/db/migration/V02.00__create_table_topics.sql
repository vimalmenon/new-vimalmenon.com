CREATE TABLE topics (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO topics (name) values ("HTML Tutorials");
INSERT INTO topics (name) values ("Others");