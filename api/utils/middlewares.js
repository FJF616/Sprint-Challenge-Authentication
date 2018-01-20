const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('../models/userModels');
const { mysecret } = require('../../config');
const {createUser} = require('../controllers/index');
const SaltRounds = 11;

const authenticate = (req, res, next) => {
  const token = req.get('Authorization');
  if (token) {
    jwt.verify(token, mysecret, (err, decoded) => {
      if (err) return res.status(422).json(err);
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).json({
      error: 'No token provided, must be set on the Authorization Header'
    });
  }
};

const encryptUserPW = (req, res, next) => {
  const { username, password } = req.body;
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // TODO: Fill this middleware in with the Proper password encrypting, bcrypt.hash()
  // Once the password is encrypted using bcrypt you'll need to set a user obj on req.user with the encrypted PW
  // Once the user is set, call next and head back into the userController to save it to the DB
// var user = new User({
//   username,
//   password
// });
 bcrypt.hash(req.body.password, SaltRounds, function (err, hash) {
  User.password = hash;
  next();
 });
//   user.save(function(err,user) {
//    if(err) { return(next(err)); }
//    res.status(200).send();
//  });
//  res.send(user);
// next();
// });
};
const compareUserPW = (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username }, function(err, user) {
    if (err) throw err;

  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
    if(isMatch) {
      const userData = {
        username: req.body.username,
        password: req.body.password
      }
      next();
    }
  });
});
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // TODO: Fill this middleware in with the Proper password comparing, bcrypt.compare()
  // You'll need to find the user in your DB
  // Once you have the user, you'll need to pass the encrypted pw and the plaintext pw to the compare function
  // If the passwords match set the username on `req` ==> req.username = user.username; and call next();
};

module.exports = {
  authenticate,
  encryptUserPW,
  compareUserPW
};
