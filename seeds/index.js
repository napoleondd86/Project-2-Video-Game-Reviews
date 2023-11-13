const seedGames = require('./game-seeds');
const seedUsers = require('./user-seeds');
const seedFeedbacks = require('./feedback-seeds');
const seedGameFeedbacks = require('./game-feedback-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedGames();
  console.log('\n----- GAMES SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedFeedbacks();
  console.log('\n----- FEEDBACKS SEEDED -----\n');

  await seedGameFeedbacks();
  console.log('\n----- GAMES FEEDBACKS SEEDED -----\n');

  process.exit(0);
};

seedAll();
