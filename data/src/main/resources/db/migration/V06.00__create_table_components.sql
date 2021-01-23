CREATE TABLE components
(
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR (250) NOT NULL,
   PRIMARY KEY (id),
   CONSTRAINT UN_COMPONENT_NAME UNIQUE (name)
);

insert into components
(
	name
)
values 
(
	"LoginPage"
);

insert into components
(
	name
)
values 
(
	"DashboardPage"
);

insert into components
(
	name
)
values 
(
	"SuperAdminPage"
);