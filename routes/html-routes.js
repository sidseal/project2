const db = require("../models");
module.exports = function(app) {
  app.get("/", (req, res) => {
    db.Exercises.findAll({}).then(results => {
      console.log(results);
      res.end();
    });
  });
};
