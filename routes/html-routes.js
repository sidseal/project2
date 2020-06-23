//Html Routes
//Importing models created
const db = require("../models");

module.exports = function(app) {
  //renders Home page
  app.get("/", (req, res) => {
    db.Exercises.findAll({}).then(results => {
      const obj = {
        exercises: results
      };
      // console.log(obj);
      res.render("index", obj);
    });
  });

};
