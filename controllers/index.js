const router = require("express").Router();

// import all api route files here
const homeRoutes = require("./homeRoutes"); //homepage
const apiRoutes = require("./api");



router.use("/api", apiRoutes);  // add api routes to the router
router.use("/", homeRoutes);// add HTML routes to the router


module.exports = router;  