const router = require('express').Router();
const { getAllItems, getItem, addItem, itemBorrowed, itemReturned} = require('../models/item.js');

// show all items
router.get('/', getAllItems, (req,res) => {
  res.send(res.rows)
});

// Show a single item
router.get('/:id', getItem, (req,res) => {
  res.send(res.rows)
});

router.post('/new', addItem, (req,res) => {
    res.redirect('/items');
});

router.put('/borrow', itemBorrowed, (req,res) => {
    res.redirect('/items');
});
//export it to a the server.js
module.exports = router;
