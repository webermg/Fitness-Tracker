// Dependencies
// =============================================================
const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness_db", {useNewUrlParser: true});

// Static directory to be served
app.use(express.static("public"));

const exphbs = require('express-handlebars');
const { json } = require("express");
const hbs = exphbs.create({
  defaultLayout: 'main',
  helpers:{
    isCardio:function(str) {
      return str === "cardio";
    },
    formatDate:function(date) {
      return date.toLocaleDateString();
    }
  }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Routes
// =============================================================
// app.use("/api",require("./controllers/apiroutes"));
// app.use("/",require("./controllers/htmlroutes"));
app.use(require("./controllers/htmlroutes"));
app.use(require("./controllers/apiroutes"));
// Starts the server to begin listening
// =============================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
