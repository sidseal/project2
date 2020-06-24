// Requiring necessary npm packages
require("dotenv").config();
const express = require("express");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars Set Up
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> :earth_americas:  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );

    workouts();
  });
});

function workouts() {
  db.Exercises.bulkCreate([
    {
      name: "Dips",
      category: "Arms",
      instructions: ""
    },
    {
      name: "Aquaman",
      category: "Back",
      instructions: ""
    },
    {
      name: "Diamond press-up",
      category: "Chest",
      instructions: ""
    },
    {
      name: "Lunges",
      category: "Legs",
      instructions: ""
    },
    {
      name: "Jumping Jacks",
      category: "Cardio",
      instructions: ""
    },
    {
      name: "Sit-ups",
      category: "Abs",
      instructions: ""
    },
    {
      name: "Crunches",
      category: "Abs",
      instructions: ""
    }
  ]);
}
