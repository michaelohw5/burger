
var express = require("express");

// creating the express server
var app = express();

// setting up the port
// process.env.PORT for heroku access
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Handling data parsing with Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set Handlebars, default layout, and view engine to look for .handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// The listener. Starts the server. 
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});