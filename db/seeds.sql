INSERT INTO users (user_name, email, password_digest, address, zipcode) VALUES
('Trevor', 'trevor@trevor', 'password', 'brokyln ny ', 11230 ),
('mikey', 'mikey@mikey', 'password', 'brokyln ny ', 11230 ),
('Alex', 'alex@alex', 'password', 'brokyln ny ', 11230 ),
('Bobby', 'bobby@bobby', 'password', 'brokyln ny ', 11233 ),
('Jason', 'jason@jason', 'password', 'brokyln ny ', 11233 ),
('Serge', 'serge@serge', 'password', 'brokyln ny ', 11233 );

INSERT INTO items(item_name, owner_id, item_desc, checked_out, borrower_id) VALUES
('shovel', 1, 'cool shovel check it out',true, 2 ),
('rake', 3, 'my rake is $$$$$$', true, 1 ),
('rake', 1, 'pretty bad not gonna lie', false, null ),
('power washer', 4, null, false, null );



