// Api Routes
// Requiring our models
const db = require("../models");

module.exports = function(app) {
  //Route error mes: 'cannot get route'
  app.post("/api/exercises", (req, res) => {
    db.Exercises.create({
      name: req.name,
      category: req.category,
      instructions: req.instructions
    }).then(dbExercise => {
      res.json(dbExercise);
    });
  });

  //Week Get route, gets weekdays but returns empty Exercise array
  app.get("/api/exercises", (req, res) => {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Exercises.findAll({}).then(dbExercise => {
      res.json(dbExercise);
    });
  });

  app.delete("/api/exercises/:id", (req, res) => {
    db.Exercises.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbExercise => {
      res.json(dbExercise);
    });
  });

  //Through Table

  // app.get("/api/thrutable", (req, res) => {
  //   // Here we add an "include" property to our options in our findAll query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Post
  //   db.ThruTable.findAll({}).then(dbThruTable => {
  //     res.json(dbThruTable);
  //   });
  // });
};
