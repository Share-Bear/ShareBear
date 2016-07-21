'use strict'

//here we are calling pg promise to access the database
//make sure the database is correct in psql
const pg = require('pg-promise')({});

const config = {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   process.env.DB_NAME,
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS
};
const db = pg(config);

//get all items that are using share bear
function getAllItems(req,res,next) {
  db.any(`SELECT * FROM items`)
    .then(data => {
      res.rows = data;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}

//get a specific items
function getItem(req,res,next) {
  db.one(`SELECT * FROM items WHERE item_id=$1`, [req.params.id])
    .then(data => {
      res.rows = data;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}

function addItem(req,res,next) {
  db.any(`INSERT INTO items(item_name, owner_id, item_desc) VALUES($1, $2, $3);`, [req.body.item_name, req.body.user_id, req.body.item_desc])
    .then(data => {
      res.rows = data;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}
//when a user borrows an item
function itemBorrowed(req,res,next) {
  db.any(`UPDATE items(borrower_id, checked_out) VALUES($1, true) where item_id=$2;`, [req.body.user_id, req.params.id])
    .then(data => {
      res.rows = data;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}
//when a user returns an item
function itemReturned(req,res,next) {
  db.any(`UPDATE items(borrower_id, checked_out) VALUES(NULL, false) where item_id=$1;`, [req.params.id])
    .then(data => {
      res.rows = data;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}
function editItem(req,res,next) {
  db.any(`UPDATE items(item_name, owner_id, item_desc) VALUES($1, $2, $3);`, [req.body.item_name, req.params.id, req.body.item_desc])
    .then(data => {
      res.rows = data;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}

function deleteItem(req,res,next) {
  db.any(`delete FROM items WHERE item_id=$1;`, [req.params.id])
  .then(data => {
      res.rows = data;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}

//export it to the controller
module.exports = { getAllItems, getItem, addItem, itemBorrowed, itemReturned, editItem, deleteItem};
