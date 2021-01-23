CREATE TABLE links (
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR (100) NOT NULL,
   title VARCHAR (100) NOT NULL,
   url VARCHAR (250) NOT NULL,
   PRIMARY KEY (id),
   CONSTRAINT UN_LINKS_URL UNIQUE (url)
);

insert into links (name, title, url)
values ("YouTube", "YouTube", "https://www.youtube.com/channel/UCjNZaCFrHPmgmYRmEud7f_A");

insert into links (name, title, url)
values ("Twitter", "Twitter", "https://twitter.com/VimalMenon13");


insert into links (name, title, url)
values ("Instagram", "Instagram", "https://www.instagram.com/vimal.s.menon");

