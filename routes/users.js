var express = require('express')
var router = express.Router()
var Controller = require('../controllers')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Test Halaman User')
})

router.get('/insertBulkUsers', Controller.User.insertBulkUsers)

module.exports = router
