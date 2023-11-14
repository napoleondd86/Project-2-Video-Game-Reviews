const router = require("express").Router();
const {User} = require("../../models");



// using Model at the top instead of User to only change one line of code


// get all records
router.get("/", async (req, res) => {
  try {
    const payload = await User.findAll();
    res.status(200).json({ status: "nice", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
})
// Get one record by pk
router.get("/:id", async (req, res) => {
  try {
    const payload = await User.findbyPk(req.params.id);
    res.status(200).json({ status: "nice", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
})

// THIS IS THE LOGOUT
router.post("/logout", (req, res) => {
  console.log("hello!!!")
  try {
    req.session.destroy(() => res.status(204).end())
  } catch (err) {
    res.status(404).json({ status: "error", payload: err.message })
  }
})

// THIS IS THE LOGOUT
router.post("/login", async (req, res) => {
  console.log("hello!!!")
  try {
    const userData = User.find({
      where: {
        email: req.body.email,
      }
    })
    // email doesnt match our database
    if(!userData) {
      res.status(400).json({message: "Incorrect Username or Password"});
      return
    }
    const pwIsCorrect = userData.checkPassword(req.body.password)
    if(!pwIsCorrect){
      res.status(400).json({message: "Incorrect Username or Password"});
      return
    }
    req.session.save(() => {
      // req.session is an object and We can place whatever we need in it.
        req.session.user_id = newUser.id
        req.session.user_email = newUser.email
        req.session.loggedIn = true
        // making a copy of req.session as it already exists 
        res.json({ status: 'success', msg: 'Congrats you are signed IN' })
      }     
    )
  } catch (err) {
    res.status(404).json({ status: "error", payload: err.message })
  }
})

// creating a new signup record
router.post("/signup", async (req, res) => {
  try {
    console.log("signup")
    console.log(req.body)
    const newUser = await User.create(req.body)
    console.log(newUser)
    // save email and password info
    req.session.save(() => {
      // req.session is an object and We can place whatever we need in it.
        req.session = {
          user_id: newUser.id,
          user_email: newUser.email,
          loggedIn: true
        }
        
        // making a copy of req.session as it already exists 
        res.json({ status: 'success', msg: 'Congrats you are signed up' })
      }     
    )
  } catch(err) {
    console.log(err.message)
    res.status(500).json({ status: 'error', msg: err.message });
  }
})

// Update a record with a put
router.put("/:id", async (req, res) => {
  try {
    const payload = await User.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json({ status: "nice", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
})

// delete a record
router.delete("/:id", async (req, res) => {
  try {
    const payload = await User.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ status: "its all gone man" })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
})


module.exports = router;