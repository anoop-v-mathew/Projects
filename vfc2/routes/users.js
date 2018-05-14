const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const config = require('../config/database');

// self-register for customers
router.post('/registerCustomer', (req, res, next) => {
  console.log("In /users/registerCustomer");
  let newUser = new User;
  newUser.userDisplayName = req.body.userDisplayName;
  newUser.email = req.body.email;
  newUser.userType.push("customer");
  newUser.password = req.body.password;
  
  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({success: false, msg: 'Failed to register Customer. Error: ' + err});
    } else {
      res.json({success: true, msg: 'Registered Customer: ' + user.userDisplayName});
    }
  });
});

// add vendor user (to be used by admin only)
router.post('/addVendorUser', (req, res, next) => {
  console.log("In /users/addVendorUser");
  let newUser = new User;
  newUser.userDisplayName = req.body.userDisplayName;
  newUser.email = req.body.email;
  newUser.userType.push("customer"); // a vendor user is also a customer
  newUser.userType.push("vendor");
  newUser.vendorName = req.body.vendorName;
  newUser.password = req.body.password;
  
  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({success: false, msg: 'Failed to add Vendor User. Error: ' + err});
    } else {
      res.json({success: true, msg: 'Added Vendor User: ' + user.userDisplayName});
    }
  });
});

// add vendor user (to be used by admin only)
router.post('/addAdminUser', (req, res, next) => {
  console.log("In /users/addAdminUser");
  let newUser = new User;
  newUser.userDisplayName = req.body.userDisplayName;
  newUser.email = req.body.email;
  newUser.userType.push("customer"); // an admin user is also a customer
  newUser.userType.push("admin");
  newUser.vendorName = req.body.vendorName;
  newUser.password = req.body.password;
  
  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({success: false, msg: 'Failed to add Admin User. Error: ' + err});
    } else {
      res.json({success: true, msg: 'Added Admin User: ' + user.userDisplayName});
    }
  });
});

// authenticate user login (/users/authenticate)
router.post('/authenticateUser', (req, res, next) => {
  console.log("In /users/authenticateUser");
  const username = req.body.username;
  const password = req.body.password;
  
  User.getUserByEmail(username, (err, user) => {
    if (err) throw err;

    if (!user) {
      return res.json({success: false, msg: 'User not found for ' + username});
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {expiresIn: 1800}); // expiration in 1800 seconds (30 min)
        user.password = undefined; // blank out the password       
        res.json({
          success: true, 
          token: 'JWT ' + token, 
          user: user
        });
      } else {
        return res.json({success: false, msg: 'Credentials incorrect for ' + username});
      }
    });
  });
});

// user profile (/users/profile)
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;