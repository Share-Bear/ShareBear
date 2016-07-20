const router = require('express').Router();
const { getAllItems, getItem } = require('../models/item.js');

// show all items
router.get('/', getAllItems, (req,res) => {
  res.send(res.rows)
});

// Show a single item
router.get('/:id', getItem, (req,res) => {
  res.send(res.rows)
});

//export it to a the server.js
module.exports = router;
