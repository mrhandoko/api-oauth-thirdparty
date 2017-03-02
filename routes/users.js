var express = require('express')
var router = express.Router()
var passport = require('passport')
var Controller = require('../controllers')

/* GET users listing. */
router.post('/login', passport.authenticate('local', {failureRedirect: '/'}), Controller.User.passportLocal)

router.get('/auth/facebook', passport.authenticate('facebook'))
router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), Controller.User.passportFacebook)

router.get('/insertBulkUsers', Controller.User.insertBulkUsers)

module.exports = router
