const router = require("express").Router();

// import all api route files here
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes"); //homepage



// add api routes to the router
router.use("/api", apiRoutes);

// add HTML routes to the router
router.use("/", homeRoutes);

module.exports = router;  