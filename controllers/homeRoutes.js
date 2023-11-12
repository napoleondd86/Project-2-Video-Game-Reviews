const router = require('express').Router();
const { Game, User } = require('../models');

router.get("/", async (req, res) => {
  res.render("homepage", {
    report: console.log("this is the homepage")
  })
})