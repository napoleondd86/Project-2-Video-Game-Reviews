const { Game } = require('../models');

const gameData = [
  {
    // civilization
    id: '52803'

  },
  {
    //  494393 Monster Hunter
    id: '494393'
  },
  {
    // name: 'Victoia',
    id: '246168'
  },
  {
    // name: Fall Guys
    id: '326292'
  },
  {
    // name:Halo(wrong one)
    id: '609130'
  },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
