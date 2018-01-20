const User = require('../models/userModels');
//const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const createUser = (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const { username, password } =  req.body;
  const user =  new User({
    username,
    password
  });
  user.save(function(err,user) {
    if(err) { return(next(err)); }
    res.status(200).send();
  });
  res.send(user);


  // user.save(function() {
  // }).then(function(result) {
  //     res.status(200).json(result);
  //     console.log(`User created: ${result}`);
  // }).catch(function(err) {
  //     res.status(500).send(err);
  //     console.log("An error occurred when creating user.", err);
  // });
};


module.exports = {
  createUser
};
