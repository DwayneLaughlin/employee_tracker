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
            choices: ["Add a new employee", "Add a new role", "Add a department"],
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
                            console.log("success")
                        })
                        
                    })
            } else if (answer.decision === "Add a new role"){
                roleQuestions();
            } else {
                deptQuestions();
            }
        })
}

function roleQuestions(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the name of the role?",
                name: "rolename"
            },
            {
                type: "number",
                message: "What is the salary for this role?",
                name: "rolesalary"
            },
            {
                type: "number",
                message: "What is the department ID for this role?",
                name:"deptID"
            }
        ])
        .then(function(answer){
            connection.query("INSERT INTO role SET ?",
                {
                    title: answer.rolename,
                    salary: answer.rolesalary,
                },
                function (err,res){
                    if (err) throw err;
                    console.log( "success")
                })
        })
}

function deptQuestions(){
    inquirer
        .prompt({
            type: "input",
            message: "What is the name of the department?",
            name: "deptID"
        })
        .then(function(answer){
            connection.query("INSERT INTO department SET ?",
                {
                    dept_name:answer.deptID
                },
                function (err,res){
                    if (err) throw err;
                    console.log( "success")
                })
        })
}