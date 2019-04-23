const orm = require("../config/orm.js");

// burger ORMs
var burger =
{
    createBurger: function (burgerName) {
        orm.addBurger("burgers", "burgerName", burgerName, function(res) {
            console.log(res)
        })
    },
    devour: function (burgerId) {
        orm.updateBurger("burgers", "devoured", 1, burgerId, function (res) {
            console.log(res)
        })
    },
    showAll: function () {
        orm.selectBurgers("burgers", function (res) {
            console.log(res)
        });
    },
}

module.exports = burger;