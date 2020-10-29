// Dependencies
// =============================================================
const express = require("express");
const mongoose = require("mongoose")
const db = require("./models");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//mongodb
mongoose.connect(process.eng.MONGODB_URI || "mongodb://localhost/fitness_db", {useNewUrlParser: true});

// Static directory to be served
app.use(express.static("public"));

const exphbs = require('express-handlebars');
const hbs = exphbs.create({
  defaultLayout: 'main'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Routes
// =============================================================
app.use("/api",require("./controllers/apiroutes"));
app.use("/",require("./controllers/htmlroutes"));

// Starts the server to begin listening
// =============================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
