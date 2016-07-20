const router = require('express').Router();
const { getAllUsers, getUser, addUser, userBorrowed, userOwned, updateUser, deleteUser  } = require('../models/user.js');

// show all users
router.get('/', getAllUsers, (req,res) => {
  res.send(res.rows)
});

//add a new user
router.post('/new', addUser, (req,res) => {
    res.redirect('/users');
});


// Show a single user
router.get('/:id', getUser, (req,res) => {
  res.send(res.rows)
});

//show all from a users borrowed items
router.get('/:id/borrow', userBorrowed, (req,res) => {
  res.send(res.rows)
});
//show all from a users owned items
router.get('/:id/own', userOwned, (req,res) => {
  res.send(res.rows)
});

// Edit user
router.put('/:id', updateUser, (req,res) => {
  res.redirect('/user');
});

//delete a user
router.delete('/:id', deleteUser, (req,res) => {
  res.redirect('/user');
})
//export it to a the server.js
module.exports = router;
