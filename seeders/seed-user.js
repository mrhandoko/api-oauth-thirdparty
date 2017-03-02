var faker = require('faker')

let seedUserArr = []
for (let i = 1; i <= 10; i++) {
  seedUserArr.push({
    username: faker.internet.userName(),
    password: 'satepadang',
    email: faker.internet.email()
  })
}

module.exports = {
  seedUser: seedUserArr
}
