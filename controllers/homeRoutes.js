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

// GAME PAGE ROUTE
router.get("/game/:id", async (req, res) => {
  try {
    const currentGame = await gameApi(req.params.id);
    //console.log(currentGame)

    const allFeedback = await Feedback.findAll({
      where:{
        game_id: req.params.id
      }
    })

    let usersWhoPlayed = []
    allFeedback.map( fb => {
      // console.log(fb.user_id)
      if( !usersWhoPlayed.includes(fb.user_id)) {
        // console.log("adding a user")
        usersWhoPlayed.push(fb.user_id)
      }
    })
    // console.log( "users", usersWhoPlayed.length )

    let totalHours = {
      "0-5": 0,
      "6-20": 0,
      "21-50": 0,
      "over 50": 0
    }
    let ages = {
      "under 18": 0,
      "18-25": 0,
      "26-35": 0,
      "36-50": 0,
      "over 50": 0
    }
    let ratings = {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    }

    allFeedback.map( fb => totalHours[fb.hours] = totalHours[fb.hours] + 1 );
    allFeedback.map( fb => ages[fb.age] = ages[fb.age] + 1 );
    allFeedback.map( fb => ratings[fb.rating ] = ratings[fb.rating] + 1 );
    // Array of reviews
    const allReviews = allFeedback.map( fb => fb.review);
    console.log(allReviews)
    console.log(typeof(allReviews))
    // console.log("total", totalHours)

    const colors = ['#8921C2', '#fe39a4', '#fffdbb', '#53e8d4', '#25c4f8']
  
    const agesArr = Object.keys(ages);
    const agesValuesArr = Object.values(ages);
    const agesColorsArr = colors.slice(0, agesArr.length);
    const hoursArr = Object.keys(totalHours);
    const valuesArr = Object.values(totalHours);
    const colorsArr = colors.slice(0, hoursArr.length);

    const ratingsArr = Object.keys(ratings);
    const ratingsValuesArr = Object.values(totalHours);
    // const ratcolorsArr = colors.slice(0, hoursArr.length);

    // console.log(hoursArr.toString())
    // console.log(valuesArr.toString())
    // console.log(colorsArr.toString())

    // const firstGame = gameList[0];
    res.render("game", {
      labels: JSON.stringify(hoursArr),
      data: JSON.stringify(valuesArr),
      colors: JSON.stringify(colorsArr),
      ageslabels: JSON.stringify(agesArr),
      agesdata: JSON.stringify(agesValuesArr),
      agescolors: JSON.stringify(agesColorsArr),
      ratingslabels: JSON.stringify(ratingsArr),
      ratingsdata: JSON.stringify(ratingsValuesArr),
      // reviews: JSON.stringify(allReviews),
      reviews: allReviews,
      currentGame, 
      loggedIn: req.session?.loggedIn
    } )
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
