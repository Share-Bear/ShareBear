const router = require('express').Router();
const { getAllUsers, getUser, addUser, updateUser, deleteUser } = require('../models/user.js');

// show all users
router.get('/', getAllUsers, (req,res) => {
  res.send(res.rows)
});

// Show a single user
router.get('/:id', getUser, (req,res) => {
  res.send(res.rows)
});

//export it to a the server.js
module.exports = router;
