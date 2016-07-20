'use strict'

//here we are calling pg promise to access the database
//make sure the database is correct in psql
const pg = require('pg-promise')({});

const config = {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   process.env.DB_NAME,
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS,
};
const db = pg(config);

//get all users that are using share bear
function getAllUsers(req,res,next) {
  db.any(`SELECT * FROM users`)
    .then(data => {
      res.rows = data;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}

//get a specific users
function getUser(req,res,next) {
  db.one(`SELECT * FROM users WHERE user_id=$1`, [req.params.id])
    .then(data => {
      res.rows = data;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}

//add a new user
function addUser(req,res,next) {
  db.any(`INSERT INTO users (user_name, email, address, zipcode) VALUES($1, $2, $3, $4);`, [req.body.user_name, req.body.email, req.body.address, req.body.zipcode])
    .then(data => {
      res.rows = data;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}
//delete a user
function deleteUser(req,res,next) {
  db.any(`delete FROM users WHERE user_id=$1;`, [req.params.id])
  .then(data => {
      res.rows = data;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}
function updateUser(req,res,next) {
  db.any(`UPDATE users (user_name, email, address, zipcode) VALUES($1, $2, $3, $4);`, [req.body.user_name, req.body.email, req.body.address, req.body.zipcode])
    .then(data => {
      res.rows = data;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}

//get a users borrowed items
function userBorrowed(req,res,next) {
  db.any(`SELECT * from items inner join users on items.borrower_id=users.user_id where user_id=$1;`, [req.params.id])
    .then(data => {
      res.rows = data;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}

function userOwned(req,res,next) {
  db.any(`SELECT item_name, owner_id, item_desc, borrower_id, checked_out from items inner join users on items.owner_id=users.user_id where user_id=$1;`, [req.params.id])
    .then(data => {
      res.rows = data;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}
//export it to the controller
module.exports = { getAllUsers, getUser, addUser, userBorrowed, userOwned, deleteUser, updateUser};

