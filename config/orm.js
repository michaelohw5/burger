var connection = require("./connection.js");

var orm = {
    //select all burgers
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ?";
        connection.query(queryString, [tableName], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    //insert a burger into the table
    insertOne: function(tableName, burgerName, cb) {
        var queryString = "INSERT INTO ? (burger_name, devoured) VALUES (?, false);"
        connection.query(queryString, [tableName, burgerName], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    //update a burger
    updateOne: function(columnInput, condition, cb) {
		var queryString = "UPDATE burgers SET ?? WHERE ?";

		connection.query(queryString, function(err, result) {
			if (err) throw err;
			
			console.log(result);
			cb(result);
		});
	}
}

module.exports = orm;