const inquirer = require("inquirer");
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"root1234",
    database:"worker_db"
});

connection.connect(function (err){
    if (err) throw err;
    start();
});

function start (){
    inquirer
        .prompt({
            type: "list",
            message: "What would you like to do?",
            choices: ["Add a new employee?", "Add a new role", "Update an employee"],
            name: "decision"
        })
        .then(function(answer){
            
        })
}