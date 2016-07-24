const router = require('express').Router();
const tokenService = require('../models/tokens.js')
const { getAllUsers, getUser, addUser, userBorrowed, userOwned, updateUser, deleteUser  } = require('../models/user.js');

router.post('/authenticate/:id', getUser, tokenService.createToken)

router.get('/', getAllUsers, (req,res) => {
  res.json( res.rows.map( user=>{
      /*only pull out the username and the id*/
      const {user_id, user_name, zipcode} = user;
      return {user_id, user_name, zipcode}
    })
  )
});

module.exports = router;
