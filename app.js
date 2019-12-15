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
    console.log("connected")
    start();
});

function start (){
    inquirer
        .prompt({
            type: "list",
            message: "What would you like to do?",
            choices: ["Add a new employee", "Add a new role", "Update an employee"],
            name: "decision"
        })
        .then(function(answer){
            if (answer.decision == "Add a new employee"){
                inquirer
                    .prompt([{
                        type: "input",
                        message:"Enter employee's first name",
                        name: "firstname"
                    },
                    {
                        type: "input",
                        message:"Enter employee's last name",
                        name: "lastname"
                    },
                ])
                    .then(function (response){
                        connection.query("INSERT INTO employee SET ?",
                        {
                            first_name: response.firstname,
                            last_name: response.lastname,
                        },
                        function (err,res){
                            if (err) throw err;
                            console.log(res + "success")
                        })
                        
                    })
            }
        })
}