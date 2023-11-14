const router = require("express").Router();
const Model = require("../../models")

// using Model at the top instead of User to only change one line of code


// get all records
router.get("/", async (req, res) => {
  try {
    const payload = await Model.findAll();
    res.status(200).json({ status: "nice", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
})
// Get one record by pk
router.get("/:id", async (req, res) => {
  try {
    const payload = await Model.findbyPk(req.params.id);
    res.status(200).json({ status: "nice", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
})
// Creating a new record
router.post("/", async (req, res) => {
  console.log("hello!!!")
  try {
    const payload = await Model.create(req.body);
    res.status(200).json({ status: "nice", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
})

// creating a new signup record
router.post("/signup", async (req, res) => {
  console.log("signup")
  // save email and password info
  const newUser = await User.create(req.body)
  req.session.save(() => {
    // req.session is an object and We can place whatever we need in it.
    if (!req.session.newUser) {
      req.session = {
        // making a copy of req.session as it already exists
        ...req.session,
        user: {
          id: newUser.id
        }
      }
    }
    res.json({ status: 'success', msg: 'Congrats you are signed up' })
  })
})

// Update a record with a pout
router.put("/:id", async (req, res) => {
  try {
    const payload = await Model.update(
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
    const payload = await Model.destroy({
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