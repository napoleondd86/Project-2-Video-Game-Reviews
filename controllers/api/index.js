const router = require('express').Router();
const gameRoutes = require('./game-routes');
const userRoutes = require('./user-routes');
const feedbackRoutes = require('./feedback-routes');

router.use('/games', gameRoutes);
router.use('/users', userRoutes);
router.use('/feedbacks', feedbackRoutes);

module.exports = router;
