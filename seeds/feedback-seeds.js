const { Feedback } = require('../models');

const tagData = [
  {
    review: 'poop',
  },
  {
    review: 'awesome',
  },
  {
    review: 'meh',
  },
  {
    review: 'okay',
  },
  {
    review: 'terrific',
  },
  {
    review: 'glad i played',
  },
  {
    review: 'not great',
  },
  {
    review: 'excellent',
  },
];

const seedFeedbacks = () => Feedback.bulkCreate(tagData);

module.exports = seedFeedbacks;
