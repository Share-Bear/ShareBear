'use strict'

//here we are calling pg promise to access the database
//make sure the database is correct in psql
const pg = require('pg-promise')({});

const pgConfig = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: 'sharebear',
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD
}
const db = pg(pgConfig);

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

//export it to the controller
module.exports = { getAllItems, getItem};
