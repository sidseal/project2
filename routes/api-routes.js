const db = require("../models");

module.exports = function(app) {
  app.get("/api/exercises/:category", (req, res) => {
    console.log(
      "*********************************************************************************"
    );
    console.log("params", req.params.category);
    db.Exercises.findAll({
      where: {
        category: req.params.category
      }
    }).then(dbExercise => {
      res.json(dbExercise);
    });
  });

  app.post("/api/exercises", (req, res) => {
    db.Exercises.create({
      name: req.name,
      category: req.category,
      instructions: req.instructions
    }).then(dbExercise => {
      res.json(dbExercise);
    });
  });

  app.get("/api/exercises", (req, res) => {
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
};
