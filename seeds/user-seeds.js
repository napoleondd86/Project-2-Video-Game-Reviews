const { User } = require('../models');

const userData = [
  {
    id: '1',
    email: "tron@gmail.com"
  },
  {
    id: '2',
    email: "dev@gmail.com"
  },
  {
    id: '3',
    email: "rob@email.com"
  },
  {
    id: '4',
    email: "trist@email.com"
  },
  {
    id: '5',
    email: "tron2email.com"
  },
  {
    id: '18',
    email: 'mike@email'
  },



];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
