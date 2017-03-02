var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy

passport.use(new FacebookStrategy({
  clientID: '601480820040610',
  clientSecret: 'ead1942592ec9f9d9a565e00219fff49',
  callbackURL: 'http://localhost:3000/users/auth/facebook/callback'
},
  function (accessToken, refreshToken, profile, cb) {
    return cb(null, profile)
  }
))
