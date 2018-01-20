const User = require('../models/userModels');
//const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const createUser = (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const { username, password } =  req.body;
  const user =  new User(req.body);
  user.save(function(err,user) {
    if(err) { 
      return(err);
     }
    res.status(200).json(user); 
  }); 
};
module.exports = {
  createUser
};
