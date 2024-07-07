drop table if exists product_tb;

CREATE TABLE product_tb (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  price integer
) ;

INSERT INTO product_tb (name, price) VALUES ('banana', 500);
INSERT INTO product_tb (name, price) VALUES ('apple', 1000);
INSERT INTO product_tb (name, price) VALUES ('melon', 2000);