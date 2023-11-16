const { Game } = require('../models');

const gameData = [
  {
    name: 'Baldurs Gate ',
    year: "2023"
  },
  {
    name: 'Final Fantasy 1',
    year: "2000"
  },
  {
    name: 'SaleBlazers',
    year: "2022"
  },
  {
    name: 'World of Warcraft',
    year: "2005"
  },
  {
    name: 'Grand Theft Auto V',
    year: "2021"
  },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
