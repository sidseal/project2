// Requiring path to so we can use relative routes to our HTML files
// const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
// const isAuthenticated = require("../config/middleware/isAuthenticated");
var db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    db.Exercises.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);

      // db.Exercises.findAll(function(data) {
      //   let obj = {
      //     exercises: data
      //   };
      //   console.log(obj);
      //   res.render("index", obj);
    });
  });

  //   app.get("/login", (req, res) => {
  //     // If the user already has an account send them to the members page
  //     if (req.user) {
  //       res.redirect("/members");
  //     }
  //     res.sendFile(path.join(__dirname, "../public/login.html"));
  //   });

  //   // Here we've add our isAuthenticated middleware to this route.
  //   // If a user who is not logged in tries to access this route they will be redirected to the signup page
  //   app.get("/members", isAuthenticated, (req, res) => {
  //     res.sendFile(path.join(__dirname, "../public/members.html"));
  //   });
};
