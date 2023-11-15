const router = require('express').Router();
const { Game, User } = require('../../models');


// // create a new Game
// router.post('/', async (req, res) => {
//   try{
//     const gameData = await Game.create(req.body);
//     res.status(200).json(gameData);
//   } catch (err) {
//     res.status(400).json(err)
//   }
// });












//////////////////  JUST A TEMPLATE //////////////////////////
////////////////// PRETTY SURE WE DONT NEED ALL OF THESE ////////////

// The `/api/games` endpoint

// find all games
router.get('/', async (req, res) => {
  try{
    const payload = await Game.findAll({
      include: { model: User }, // THIS INCLUDES ASSOCIATED USER
    });
    res.status(200).json(payload);
  } catch (err) {
    res.status(500).json(err)
  }
});

// find one game by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const payload = await Game.findByPk(req.params.id, {
      include: {model: User}
    })
    res.status(200).json(payload);
  } catch (err) {
    res.status(500).json(err)
  }
});

// create a new Game
router.post('/', async (req, res) => {
  try{
    const gameData = await Game.create(req.body);
    res.status(200).json(gameData);
  } catch (err) {
    res.status(400).json(err)
  }
});

// update a game by its `id` value
router.put('/:id',  (req, res) => {
  Game.update(
    req.body, 
    {
      where: {
        id: req.params.id
      }
    }
  ).then((updatedGame) => {
    res.json(updatedGame);
  }).catch((err) => res.json(err))
});


// delete a game by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const gameData = await Game.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!gameData) {
      res.status(404).json({message: "No game found with this id!"});
      return
    }
    res.status(200).json(gameData);
    } catch(err) {
      res.status(500).json(err)
    }
});

module.exports = router;
