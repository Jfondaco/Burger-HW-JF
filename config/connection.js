var mysql = require("mysql");

var dbConnect;

//setup db connection
dbConnect = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ihatepasswords13!",
    database: "burgers_db"
});

//connect and log
dbConnect.connect(function(err) {
    console.log("connected as id " + dbConnect.threadId);
});

module.exports = dbConnect;