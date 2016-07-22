const router = require('express').Router();
const { getAllUsers, getUser, addUser, userBorrowed, userOwned, updateUser, deleteUser  } = require('../models/user.js');

const tokenService = require('../models/tokens.js')

// router.use( tokenService.validateToken )

// show all users
router.get('/', getAllUsers, (req,res) => {
  res.json( res.users.map( user=>{
      /*only pull out the username and the id*/
      const {user_id, user_name, zipcode} = user;
      return {user_id, user_name, zipcode}
    })
  )
});

//add a new user
router.post('/new', addUser, (req,res) => {
    res.send(req.params.id)
});


// Show a single user
router.get('/:id', getUser, (req,res) => {
  res.send(res.rows)
});

router.post('/authenticate', getUser, tokenService.createToken, (req,res)=> {
  res.send(res.rows)
})
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
  res.send(req.params.id)
});

//delete a user
router.delete('/:id', deleteUser, (req,res) => {
  res.send(req.params.id)
})
//export it to a the server.js
module.exports = router;
