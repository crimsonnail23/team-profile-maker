const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const generateSite = require('./src/generatePage.js');
let finalTeam = []

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
        name: 'name',
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
            choices:[{name:'add an engineer', value:'engineer'}, {name:'add an intern', value: 'intern'}, {name: 'done making team', value: 'team'}]
        }
    ]).then(userChoice=>{
        if(userChoice.menu==='engineer'){
            engineerQuestions();
        };
        if(userChoice.menu==='intern'){
            internQuestions();
        };
        if(userChoice.menu==='team'){
            makeTeam();
        }

    })
}

function engineerQuestions(){
    inquirer.prompt(engineerQuestionsArray)
    .then((answers)=>{
        const engineer = new Engineer(answers.name, answers.engineerId, answers.engineerEmail, answers.username)
        finalTeam.push(engineer);
        console.log(finalTeam);
        promptMenu();
    })
}

function internQuestions(){
    inquirer.prompt(internQuestionsArray)
        .then((answers)=>{
            const intern = new Intern (answers.internName, answers.internId, answers.internEmail, answers.school);
            finalTeam.push(intern);
            console.log('line 115 ', finalTeam)
            promptMenu();
        })
}

function makeTeam(){
    console.log('line 124 ',finalTeam)
    fs.writeFile('./dist/index.html', generateSite(finalTeam), (err)=>{
        if (err){
            return console.log(err);
        }
        console.log('it worked.')
    })
}

//code that will start the prompts when called.
function start(){
    inquirer.prompt(managerQuestionsArray)
        .then((answers)=>{
            //console.log(answers);
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            finalTeam.push(manager);
            console.log('line 132 ', finalTeam)
            promptMenu();
        });

};

//starts the prompts.
start();
