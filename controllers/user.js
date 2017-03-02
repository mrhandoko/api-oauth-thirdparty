var Model = require('../models')
var Seed = require('../seeders')

module.exports = {
  insertBulkUsers: function (req, res, next) {
    Model.User.insertMany(Seed.User.seedUser).then(function (data) {
      res.send(data)
    })
  }
}
