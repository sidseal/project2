// const Op = Sequelize.Op;
const db = require("../models");
module.exports = function(app) {
  // app.get("/", (req, res) => {
  //   db.Exercises.findAll({}).then(results => {
  //     // results are available to us inside the .then
  //     const obj = {
  //       exercises: results
  //     };
  //     console.log(obj);
  //     // res.render("index", obj);
  //     res.render("index", {
  //       days: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
  //     });
  //   // });
  // });

  app.get("/", (req, res) => {
    db.Exercises.findAll({}).then(results => {
      // Object
      // const obj = {
      //   days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      //   exercises: results
      // };
      const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
      const obj = {
        days: []
        // days: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
        // exercises: ["Push-Ups"]
      };
      console.log(obj);

      //render page
      for (let i = 0; i < 7; i++) {
        obj.days.push({
          name: days[i],
          workout: results[i].name
        });
      }

      res.render("index", obj);
    });
  });
};
