const express = require("express");
const app = express();
// const session = require('express-session');

const path = require("path");

const routes = require("./controllers");
const sequelize = require("./config/connection");
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Handlebar standard 
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001;

// directs all routes to ./controllers directory
app.use(routes);

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); 

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// This is settinng force in the sync to false
const okToSync = (process.env.NODE_ENV === "production") ? false : true;
// this reseting the models using sequelize
sequelize.sync({ force: okToSync }).then(() => {
  // this is starting the express server
  app.listen(PORT, () => console.log(`now listening at http://localhost:${PORT}`));
});
