const router = require('express').Router();
const { Game, User, Feedback, GameFeedback } = require('../models');
const { searchApi , gameApi } = require("../api-calls/searchApi")

//////////////////  JUST A TEMPLATE //////////////////////////
////////////////// PRETTY SURE WE DONT NEED ALL OF THESE ////////////

// The `/api/games` endpoint

// render homepage
router.get('/', async (req, res) => {
  try {
    res.render("homepage", {loggedIn: req.session?.loggedIn});
    // This should start a session count for user visit (do we need this? taken from MVC #15)
    req.session.save(() => {
      // We set up a session variable to count the number of times we visit the homepage
      if (req.session.countVisit) {
        // If the 'countVisit' session variable already exists, increment it by 1
        req.session.countVisit++;
      } else {
        // If the 'countVisit' session variable doesn't exist, set it to 1
        req.session.countVisit = 1;
      }
      // I think this render is handled by handlebars? We really only need this bottom part to display countVisit
      // res.render('homepage', {
      //   // (need to input the homepage api data or whatever we are planning here),
      //   // We send over the current 'countVisit' session variable to be rendered
      //   countVisit: req.session.countVisit,

      //   // Checking to verify logged in status the loggedIn variable needs to match the other variable
        // loggedIn: req.session.loggedIn
      // });

    });
  }
  catch (err) {
    res.status(500).json(err)
  }
});

// SEARCH PAGE ROUTE
router.get("/search/:searched", async (req, res) => {
  console.log("this is the search route")
  try {
    const gameList = await searchApi(req.params.searched);
    console.log(gameList)
    res.render("search", {gameList, loggedIn: req.session?.loggedIn} )
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.get("/game/:id", async (req, res) => {
  try {
    const firstGame = await gameApi(req.params.id);
    console.log(firstGame)
    // const firstGame = gameList[0];
    res.render("game", {firstGame, loggedIn: req.session?.loggedIn} )
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
})























// find one game by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const payload = await Game.findByPk(req.params.id, {
      include: { model: User }
    })
    res.status(200).json(payload);
  } catch (err) {
    res.status(500).json(err)
  }
});

// create a new Game
router.post('/', async (req, res) => {
  try {
    console.log("hello")
    const gameData = await Game.create(req.body);
    res.status(200).json(gameData);
  } catch (err) {
    res.status(400).json(err)
  }
});

// update a game by its `id` value
router.put('/:id', (req, res) => {
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
      res.status(404).json({ message: "No game found with this id!" });
      return
    }
    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
