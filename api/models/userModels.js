const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.hash_password);
};
module.exports = mongoose.model('User', UserSchema);
