const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database'); 

// User schema

const UserSchema = mongoose.Schema({
  userDisplayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userType: {
    type: Array,
    required: true
  },
  vendorName: {
    type: String
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByEmail = function(email, callback) {
    const query = {"email": email};
    console.log('query:'+ JSON.stringify(query));
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
  // generate salt for hash using 10 rounds
  bcrypt.genSalt(10, (err, salt) => {
    // hash the password and replace the password
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.UpdateUser = function(updateUser, callback){
  const Name = updateUser.VendorName;
  const Email = updateUser.VendorEmail;
  //const Phone = updateUser.VendorPhone;
  const Owner = updateUser.VendorOwner;
  //const Location = updateUser.VendorLocation;

  const query = {"email": Email};

    User.update(query, {$set:{
      userDisplayName: Owner,
      email: Email,
      vendorName: Name
    }}, callback);
}

module.exports.DeleteUser = function(email, callback){
  const query = {"email" : email};
  User.deleteOne(query, callback);
}
module.exports.comparePassword = function(rawPassword, hashedPassword, callback) {
  bcrypt.compare(rawPassword, hashedPassword, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
}