// Requiring our models and passport as we've configured it
// const db = require("../models");

module.exports = function (app) {
    const obj = {
        name: "laura",
        last: "Hernan"
    }
    app.get("/test", (req, res) => {
        console.log(obj);
        res.render("index", obj);
    });
}