'use strict'

var passport = require('passport')
var Strategy = require('passport-local').Strategy
var Model = require('../models')

passport.use(new Strategy(
  function (username, password, cb) {
    Model.User.findOne({username: username}, (err, user) => {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user)
    })
  })
)

passport.serializeUser(function (data, cb) {
  cb(null, data)
})
