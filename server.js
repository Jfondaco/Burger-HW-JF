// requires
const express = require("express");
var handlebars = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

//port
const PORT = process.env.PORT || 3000;

const app = express();

//setup public directory
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup handlebars for views
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//pass routes too server
app.use(routes);

// Start server on 3000
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});