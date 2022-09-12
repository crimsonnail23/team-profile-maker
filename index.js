const inquirer = require('inquirer');
const fs = require('fs');

//creats an array of questions that will be asked.
const questions = [
    {
        type: 'input',
        name: 'employee name',
        message: 'what is the name of the employee?'
    }
];

function start(){
    inquirer.prompt(questions)
};

start();