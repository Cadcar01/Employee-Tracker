const inquirer = require('inquirer')
const { pool } = require('pg')

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
    }

    if (answers.action === 'view all roles') {
        pool.query('SELECT * FROM role', function (err, { rows }) {
            console.log(rows);
          });    }

    if (answers.action === 'view all employees') {
        pool.query('SELECT * FROM employee', function (err, { rows }) {
            console.log(rows);
          });    }

    if (answers.action === 'add a department') {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter department name',
                name: 'department'
            }
        ])
    }

    if (answers.action === 'add a role') {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter role name',
                name: 'role',
            },
            {
                type: input,
                message: 'Enter role salary',
                name: 'salary',
            },
            {
                type: input,
                message: 'Enter role department',
                name: 'role_department',
            }
        ])
    }

    if (answers.action === 'add an employee') {
    inquirer.prompt([
        {
            type: input,
            message: 'Enter employee first name',
            name: 'first_name',
        },
        {
            type: input,
            message: 'Enter employee last name',
            name: 'last_name',
        },
        {
            type: input,
            message: 'Enter employee role',
            name: 'employee_role',
        },
    ])
    }

    if (answers.action === 'update an employee') {
        inquirer.prompt([
            {
                type: list,
                message: 'Select an employee to update',
                name: 'updated_employee',
                choices: []
            }
        ])
    }
})}

init()