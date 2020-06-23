
// Requiring path to so we can use relative routes to our HTML files
// const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
// const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    db.Exercises.findAll({}).then(results => {
      // results are available to us inside the .then
      const obj = {
        exercises: results
      };
      console.log(obj);
      res.render("index", obj);
    });
  });

  // app.post("/api/exercise", (req, res) => {
  //   Exercises.create(["name"], [req.body.name], result => {
  //     // Send back the ID of the new quote
  //     res.json({ id: result.insertId });
  //   });
  // });
};
