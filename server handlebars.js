const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");
const sequelize = require("./config/connection");

// Handlebar standard 
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 3001;


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Homepage route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"))
})

app.use("*", routes);

const okToSync = (process.env.NODE_ENV === "production") ? false : true;
sequelize.sync({ force: okToSync }).then(() => {
  app.listen(PORT, () => console.log("now listenin"));
});
