const express = require("express");
const app = express();

const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);



const path = require("path");

const routes = require("./controllers");
const sequelize = require("./config/connection");
// Handlebar standard 
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

/*1. User signs up or logs in 
2. Server receives that request 
3. Server creates a new session 
- A new token is created and associated w/ the new session 
4. Server sends token back to the browser as a cookie and does so 
with each request until token expires 
5. Browser receives the cookie, and automatically attaches to any 
future request to the same domain 
6. In most cases, the session data is saved to whatever database the 
server is using

Setting up session configuration, we could add others if we wanted to, but Gary says these settings should be good to go */

const sess = {
  secret: 'gary doesnt know',
  cookies: {
    // is this the standard
    maxAge: 1 * 24 * 60 * 60 * 1000, //expire after 1 day
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// have session run
app.use(session(sess));


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


// for session signing up on the front end

async function sumbitSignup() {
  // api/User/signup becasue it needs to go to a specific place.
  const query = await fetch("api/User/signup", {
    method: 'POST',
    body: JSON.stringfy({
      email: email,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const result = await query.json()
  if (result.status === 'success') {

  }
}


// This is settinng force in the sync to false
const okToSync = (process.env.NODE_ENV === "production") ? false : true;
// this reseting the models using sequelize
sequelize.sync({ force: okToSync }).then(() => {
  // this is starting the express server
  app.listen(PORT, () => console.log(`now listening at http://localhost:${PORT}`));
});
