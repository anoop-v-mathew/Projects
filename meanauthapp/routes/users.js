const express = require('express');
const router = express.Router();
const passpeort = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// register users (/users/register)
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({success: false, msg: 'Failed to add user'});
    } else {
      res.json({success: true, msg: 'Added user'});
    }
  });
});

// authenticate user login (/users/authenticate)
router.post('/authenticate', (req, res, next) => {
  res.send('AUTHENTICATE');
});

// user profile (/users/profile)
router.get('/profile', (req, res, next) => {
  res.send('PROFILE');
});

module.exports = router;