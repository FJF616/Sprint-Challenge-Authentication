const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const UserSchema = Schema({
  // create your user schema here.
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true
  }
});
// 
// checking if password is valid
UserSchema.methods.checkPassword = function(potentialPassword, cb) {
  // check passwords
  bcrypt.compare(potentialPassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};
module.exports = mongoose.model('User', UserSchema);
