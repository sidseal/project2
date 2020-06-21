const db = require("../models");
module.exports = function(app) {
  app.get("/", (req, res) => {
    db.Exercises.findAll({}).then(results => {
      const obj = { exercises: results };
      console.log(obj);
      res.render("index", obj);
    });
  });
};
