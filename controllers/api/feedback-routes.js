const router = require('express').Router();
const { User, Feedback, GameFeedback } = require('../../models');

//////////////////  JUST A TEMPLATE //////////////////////////
////////////////// PRETTY SURE WE DONT NEED ALL OF THESE ////////////

// The `/api/feedback` endpoint

// find all feedback
router.get('/', async (req, res) => {
  try{
    const payload = await Feedback.findAll({
      include: [{ model: User, through: GameFeedback }], // THIS INCLUDES ASSOCIATED USER DATA
    });
    res.status(200).json(payload);
  } catch (err) {
    res.status(500).json(err)
  }
});

// find one feedback by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const payload = await Feedback.findByPk(req.params.id, {
      include: [{model: User, through: GameFeedback}]
    })
    res.status(200).json(payload);
  } catch (err) {
    res.status(500).json(err)
  }
});

// create a new feedback
router.post('/', async (req, res) => {
  try{
    const payload = await Feedback.create(req.body);
    res.status(200).json(payload);
  } catch (err) {
    res.status(400).json(err)
  }
});

// update a feedback by its `id` value
router.put('/:id',  (req, res) => {
  Feedback.update(
    req.body, 
    {
      where: {
        id: req.params.id
      }
    }
  ).then((updatedfeedback) => {
    res.json(updatedfeedback);
  }).catch((err) => res.json(err))
});


// delete a feedback by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const payload = await Feedback.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!payload) {
      res.status(404).json({message: "No feedback found with this id!"});
      return
    }
    res.status(200).json(payload);
    } catch(err) {
      res.status(500).json(err)
    }
});

module.exports = router;
