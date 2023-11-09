const router = require("express").Router();
const Model = require("../../db/User")

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
  try {
    const payload = await Model.create(req.body);
    res.status(200).json({ status: "nice", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
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