const { GameFeedback } = require('../models');

const gameFeedbackData = [
  {
    user_id: 1,
    feedback_id: 6,
  },
  {
    user_id: 1,
    feedback_id: 7,
  },
  {
    user_id: 1,
    feedback_id: 8,
  },
  {
    user_id: 2,
    feedback_id: 6,
  },
  {
    user_id: 3,
    feedback_id: 1,
  },
  {
    user_id: 3,
    feedback_id: 3,
  },
  {
    user_id: 3,
    feedback_id: 4,
  },
  {
    user_id: 3,
    feedback_id: 5,
  },
  {
    user_id: 4,
    feedback_id: 1,
  },
  {
    user_id: 4,
    feedback_id: 2,
  },
  {
    user_id: 4,
    feedback_id: 8,
  },
  {
    user_id: 5,
    feedback_id: 3,
  },
];

const seedGameFeedbacks = () => GameFeedback.bulkCreate(gameFeedbackData);

module.exports = seedGameFeedbacks;
