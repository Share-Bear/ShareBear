'use strict'

//here we are calling pg promise to access the database
//make sure the database is correct in psql
const db = require('./connections.js')

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

function itemsByZip(req,res,next) {
  console.log('items by zip model works')
  db.any(`SELECT item_id, item_name, item_desc, owner_id, borrower_id, zipcode, checked_out from items inner join users on items.owner_id=users.user_id where zipcode=$1;`, [req.params.id])
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
  db.any(`UPDATE items set borrower_id=$1, checked_out=true where item_id=$2;`, [req.body.user, req.params.id])
    .then(data => {
      console.log(req.body)
      res.rows = data;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}
//when a user returns an item
function itemReturned(req,res,next) {
  console.log('hello')
  db.any(`UPDATE items set borrower_id=NULL, checked_out=false where item_id=$1;`, [req.params.id])
    .then(data => {
      console.log('RETURNEDD!!!!')
      res.rows = data;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}
function editItem(req,res,next) {
  db.any(`UPDATE items set item_name=$1, item_desc=$2 where item_id=$3;`, [req.body.item_name, req.body.item_desc, req.params.id])
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
module.exports = { getAllItems, getItem, addItem, itemBorrowed, itemReturned, editItem, deleteItem, itemsByZip};
