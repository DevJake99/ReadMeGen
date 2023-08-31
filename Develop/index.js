// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
questions = [
    {
        type: 'input',
        name: 'ProjectTitle',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'Motivation',
        message: 'Why did you decide to build this project (what was your motivation?)'
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Add table of contents?'
    }, 
    {
        type: 'input',
        name: 'Steps',
        message: 'What are the steps for instilation?'
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'List any collaborators, if any that contributed to the project.'
        
    },
    {
        type: 'input',
        name:'Liscense',
        message:'What liscense does your project use?'
    },
    {
        type: 'input',
        name: 'Features',
        message: 'list out you project features separated by a comma'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Create a guidline for others to contribute.'
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data){
    const content = 
    `#${data.ProjecTitle}
    
    ##Description
    ${data.Motivation}
    
    ##Table of Contents
    ${data.tableOfContents}
    
    ##Instillation
    ${data.Steps}
    
    ##Credits
    ${data.Credits}
    
    ##Liscense
    ${data.Liscense}
    
    ##Features
    ${data.Features}
    
    ##How to contribute
    ${data.contribute}`;
 }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
