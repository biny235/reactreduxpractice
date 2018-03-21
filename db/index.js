const conn = require('./conn');
const User = require('./User');
const faker = require('faker');

const syncAndSeed = ()=>{
  
  return conn.sync({force:true})
    .then(()=>{
      return Promise.all([
        User.create({name: faker.name.findName()}),
        User.create({name: faker.name.findName()}),
        User.create({name: faker.name.findName()}),
        User.create({name: faker.name.findName()}),
        User.create({name: faker.name.findName()}),
      ])
    })
};

module.exports = {
  syncAndSeed,
  models: {
    User
  }
}