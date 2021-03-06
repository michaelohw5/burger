var connection = require("./connection.js");

var orm = {
    //select all burgers
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    //insert a burger into the table
    insertOne: function(burgerName, cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false);"
        connection.query(queryString, [burgerName], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    //update a burger
    updateOne: function(columnInput, condition, cb) {
		var queryString = "UPDATE burgers SET devoured=? WHERE id= ?";

		connection.query(queryString, [columnInput, condition], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
}

module.exports = orm;