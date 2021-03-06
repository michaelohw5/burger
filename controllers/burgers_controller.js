var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

//routes
router.get("/", function (req, res) {
    burger.selectAll(function (result) {
        var handlebars = {
            burgers: result
        };
        res.render("index", handlebars);
    })
})

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
        //send json of newly added burger
        res.json(result);
    })
})

router.put("/api/burgers/:id", function (req, res) {
    var burgerId = req.params.id;
    burger.updateOne(req.body, burgerId, function (result) {
        if (result.changedRows === 0) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})



module.exports = router;