const router = require('express').Router();
const { getAllUsers, getUser, addUser } = require('../models/user.js');

// show all users
router.get('/', getAllUsers, (req,res) => {
  res.send(res.rows)
});

// Show a single user
router.get('/:id', getUser, (req,res) => {
  res.send(res.rows)
});

router.post('/new', addUser, (req,res) => {
    res.redirect('/users');
});
//export it to a the server.js
module.exports = router;
