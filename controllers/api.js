const router = require('express').Router();
const tokenService = require('../models/tokens.js')
const { getAllUsers, getUser, addUser, userBorrowed, userOwned, updateUser, deleteUser  } = require('../models/user.js');

router.post('/authenticate/:id', getUser, tokenService.createToken)


module.exports = router;
