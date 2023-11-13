const { User } = require('../models');

const userData = [
  {
    username: 'kurt1234',
    email: "kurt@gmail.com"
  },
  {
    username: 'victor1234',
    email: "victor@gmail.com"
  },
  {
    username: 'tim1234',
    email: "tim@gmail.com"
  },
  {
    username: 'ben1234',
    email: "ben@gmail.com"
  },
  {
    username: "gary1234",
    email: "gary@gmail.com"
  }

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
