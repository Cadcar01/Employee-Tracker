const { Pool } = require('pg');
require('dotenv').config()
const inquirer = require('inquirer')


// Connect to database
const pool = new Pool(
  {
    user: 'postgres',
    password: process.env.password,
    host: 'localhost',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
)

pool.connect()


function init() {
  inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'action',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }
    
  ]).then((answers) => {
    console.log(answers)
    if (answers.action === 'view all departments') {
      pool.query('SELECT * FROM department', function (err, { rows }) {
        console.log(rows);
      });
    };
  })
};

init()