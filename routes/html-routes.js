// const Op = Sequelize.Op;
const db = require("../models");
module.exports = function (app) {
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
    //render page
    res.render("index", {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


      // exercises: results

      //     db.Exercises.findAll({}).then(results => {
      // results are available to us inside the .then
      // const obj = {
      //   exercises: results
      // };
      // console.log(obj);
      // res.render("index", obj);
      //       res.render("index", {
      //         days: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
      //       });
    });
  });
};
