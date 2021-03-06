const router = require('express').Router();
const { getAllItems, getItem, addItem, itemBorrowed, itemReturned, deleteItem, editItem, itemsByZip} = require('../models/item.js');

// show all items
router.get('/', getAllItems, (req,res) => {
  res.send(res.rows)
});

// Show a single item
router.get('/:id', getItem, (req,res) => {
  res.send(res.rows)
});

// Show a single item
router.get('/:id', getItem, (req,res) => {
  res.send(res.rows)
});

// Show a single item
router.get('/zip/:id', itemsByZip, (req,res) => {
  res.send(res.rows)
});

//add a new item
router.post('/new', addItem, (req,res) => {
    res.send(res.rows)
});

// //when a user edits an item
router.put('/:id', editItem, (req,res) => {
    res.send(req.params.id)
});
//Delete an item
router.delete('/:id', deleteItem, (req,res) => {
  res.send(req.params.id)
});

//when a user borrows an item
router.put('/:id/borrow', itemBorrowed, getAllItems, (req,res) => {
    res.send(req.params.id)
});

//when a user returns a borrowed item
router.put('/:id/return', itemReturned, (req,res) => {
    console.log('RETURNEDD!!!!')
    res.send(req.params.id)
});

//export it to a the server.js
module.exports = router;

