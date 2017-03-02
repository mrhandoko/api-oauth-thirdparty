'use strict'

var Model = require('../models')
var Seed = require('../seeders')

module.exports = {
  insertBulkUsers: function (req, res, next) {
    Model.User.insertMany(Seed.User.seedUser).then(function (data) {
      res.send(data)
    })
  },
  passportLocal: (req, res, next) => {
    res.send(res.req.user)
  },
  passportFacebook: (req, res, next) => {
    res.send(res.req.user)
  }
}
