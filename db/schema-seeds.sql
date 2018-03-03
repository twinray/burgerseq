USE burgers_db;

CREATE TABLE BurgerSeqs
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	PRIMARY KEY(id)
);

use burgers_db;

INSERT INTO BurgerSeqs (burger_name, devoured) VALUES ('Double Cheeseburger', false);
INSERT INTO BurgerSeqs (burger_name, devoured) VALUES ('Avocado Burger', false);
INSERT INTO BurgerSeqs (burger_name, devoured) VALUES ('Chicken Burger', false);
INSERT INTO BurgerSeqs (burger_name, devoured) VALUES ('Veggie Burger', true);
INSERT INTO BurgerSeqs (burger_name, devoured) VALUES ('Mushroom Burger', true);
INSERT INTO BurgerSeqs (burger_name, devoured) VALUES ('Fish Burger', true);