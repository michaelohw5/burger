var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(result);
        })
    },
    insertOne: function(burgerName, cb) {
        orm.insertOne("burgers", burgerName, function(result) {
            cb(result);
        });
    },
    updateOne: function(columnInput, condition, cb) {
        orm.updateOne(columnInput, condition, function(result) {
            cb(result);
        });
    }
}

module.exports = burger;