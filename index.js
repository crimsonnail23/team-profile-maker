const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const generateSite = require('./src/page-template.js');
const finalTeam = []

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

const promptMenu =()=>{
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'do you want to add an engineer, an intern, or are you done building the team',
            choices:['add an engineer', 'add an intern', 'finish building my team']
        }
    ]).then(userChoice=>{
        switch (userChoice.menu) {
            case 'add an engineer':
                engineerQuestions();
                break;
            case 'add an intern':
                internQuestions();
                break;
            case 'done making team':
                makeTeam();
                break;

        }
    })
}

function engineerQuestions(){
    inquirer.prompt(engineerQuestionsArray)
    .then((answers)=>{
        console.log(answers)
        promptMenu();
    })
}

function internQuestions(){
    inquirer.prompt(internQuestionsArray)
        .then((answer)=>{
            console.log(answer)
            promptMenu();
        })
}

function makeTeam(finalTeam){
    console.log('stuff')
    fs.writeFile('./dist/index.html', generateSite(finalTeam))
}

//code that will start the prompts when called.
function start(){
    inquirer.prompt(managerQuestionsArray)
        .then((answers)=>{
            //console.log(answers);
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            finalTeam.push(manager);
            console.log(finalTeam)
            promptMenu();
        });

};

//starts the prompts.
start();