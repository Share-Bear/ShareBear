--use the db called sharebear--


DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS items;

--create the table for users--
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  user_name VARCHAR NOT NULL,
  email VARCHAR unique NOT NULL,
  password_digest TEXT,
  address VARCHAR NOT NULL,
  zipcode INT NOT NULL
);

--create the table for items--
CREATE TABLE items (
  item_id SERIAL PRIMARY KEY NOT NULL,
  item_name VARCHAR NOT NULL,
  owner_id INT NOT NULL,
  item_desc VARCHAR(255),
  checked_out BOOLEAN DEFAULT false NOT NULL,
  borrower_id INT
);
