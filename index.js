const inquirer = require('inquirer');
const fs = require('fs');

//creats an array of questions that will be asked.
const managerQuestionsArray = [
    {
        type: 'input',
        name: 'name',
        message: 'what is the name of the team manager?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'what is their ID'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is their email address'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'what is their office number'
    },
    {
        type: 'list',
        name: 'addMore',
        message: 'are you done building your team, or do you want to add more?',
        choices: ['done', 'add engineer', 'intern'],
        
    }
];

const engineerQuestionsArray=[
    {
        type: 'input',
        name: 'engineerName',
        message: 'what is the name of the engineer'
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'what is their ID'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'what is their email'
    },
    {
        type: 'input',
        name: 'username',
        message: 'what is their username',
    },
    {
        type: 'list',
        name: 'addMore',
        message: 'are you done building your team, or do you want to add more?',
        choices: ['done', 'add engineer', 'intern']
    }

];

const internQuestionsArray =[
    {
        type: 'input',
        name: 'internName',
        message: 'what is their name'
    },
    {
        type: 'input',
        name: 'internId',
        message: 'what is their ID'
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'what is their email'
    },
    {
        type: 'input',
        name: 'school',
        message: 'what school did they attend'
    }
]

function engineerQuestions(){
    inquirer.prompt(engineerQuestionsArray)
}

//code that will start the prompts when called.
function start(){
    inquirer.prompt(managerQuestionsArray)
        .then((answers)=>{
            console.log(answers)
        });
};

//starts the prompts.
start();