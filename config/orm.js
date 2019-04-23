const connection = require("../config/connection.js");

var orm = {
    addBurger: function () {
        var addBurger = "INSERT INTO burgers";
        connection.query(addBurger, function (err, result) {
            if (err){
                 throw err;
            }
            return result;
        });
    },
    updateBurger: function (condition) {
        var updateBurger = "UPDATE burgers SET ### = ### WHERE "+condition;
        connection.query(updateBurger, condition, function (err, result) {
            if (err){
                 throw err;
            }
            return result;
        });
    },
    selectBurgers: function () {
        var getBurgers = "SELECT * FROM burgers";
        connection.query(getBurgers, function (err, result) {
            if (err) {
                throw err;
            }
            return result;
        });
    }
};

module.exports = orm;