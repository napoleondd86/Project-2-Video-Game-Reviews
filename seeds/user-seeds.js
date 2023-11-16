const { User } = require('../models');

const userData = [
  {
    id: '1',

  },
  {
    id: '2',

  },
  {
    id: '3',

  },
  {
    id: '4',

  },
  {
    id: '5',

  },
  {
    id: '18',

  },
  {
    id: '19',

  },
  {
    id: '20',

  },
  {
    id: '21',

  },
  {
    id: '22',

  },
  {
    id: '23',

  },
  {
    id: '24',

  },


];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
