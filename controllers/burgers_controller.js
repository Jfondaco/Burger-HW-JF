const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

//get route
router.get("/", function(req, res){
    //need to display burger data on page load
      res.render("index", res);
    });

//post route
router.post("/api/burgers", function(req, res) {
    //pass html entry into database
    burger.createBurger(req.body, function() {
      console.log("burger created");
    });
  });
  
//change isDevoured boolean to true
router.put("/api/burgers/:id", function(req, res) {
    burger.devour( req.params.id, function() {
      console.log(res.send("burger eaten"))
    });
  });


module.exports = router;