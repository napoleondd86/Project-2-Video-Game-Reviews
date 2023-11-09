const router = require("express").Router();

// import all api route files here
const userApiRoutes = require("./api/user.api.routes");

// import all html route files here
const userHtmlRoutes = require(".html/user.html.routes");

// add api routes to the router
router.use("/api", userApiRoutes);

// add HTML routes to the router
router.use("/user", userHTMLRoutes);

module.exports = router;  