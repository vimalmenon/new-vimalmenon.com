CREATE TABLE link_types (
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR (50) NOT NULL,
   PRIMARY KEY (id),
   CONSTRAINT UN_LINK_TYPES_NAME UNIQUE(name)
);

insert into link_types
(
	name
)
values 
(
	"SOCIAL_MEDIA"
);

insert into link_types
(
	name
)
values 
(
	"OTHERS"
);