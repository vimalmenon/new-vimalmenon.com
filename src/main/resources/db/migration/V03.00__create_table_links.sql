CREATE TABLE links (
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR (100) NOT NULL,
   title VARCHAR (100) NOT NULL,
   url VARCHAR (250) NOT NULL,
   type VARCHAR (50) NOT NULL,
   sequence int signed NOT NULL,
   is_active TINYINT NOT NULL,
   PRIMARY KEY (id),
   CONSTRAINT UN_LINKS_URL UNIQUE (url)
);

insert into links (name, title, url, type, sequence, is_active)
select "YouTube", "YouTube", "https://www.youtube.com/channel/UCjNZaCFrHPmgmYRmEud7f_A",id, 1, 1 from link_types where name ="SOCIAL_MEDIA";

insert into links (name, title, url, type, sequence,is_active)
select "Twitter","Twitter","https://twitter.com/VimalMenon13",id ,2,1 from link_types where name ="SOCIAL_MEDIA";


insert into links (name, title, url, type, sequence, is_active)
select "Instagram","Instagram","https://www.instagram.com/vimal.s.menon",id,3,1 from link_types where name ="SOCIAL_MEDIA";


insert into links (name, title, url, type, sequence,is_active)
select "GitHub","GitHub","https://github.com/vimalsmenon",id,4,1 from link_types where name ="SOCIAL_MEDIA";