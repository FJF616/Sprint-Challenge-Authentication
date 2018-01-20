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

// UserSchema.pre('save', function (next) {
//   var user = this;
//   bcrypt.hash(user.password, SaltRounds, function (err, hash){
//     if (err) {
//       return next(err);
//     }
//     user.password = hash;
//     next();
//   })
// });
module.exports = mongoose.model('User', UserSchema);
