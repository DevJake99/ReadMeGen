// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = [
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
        name: 
    }
    'What is your project title? ', 
    'Why did you decide to build this project (what was your motivation?) ', 
    'Add table of contents? ', 
    'What are the steps required to install your project?', 
    'If you have usage instructions, please enter, otherwise press enter.', 
    'List any credits if this project was built with collaborators.', 
    'Does your project have a liscense? ', 
    'If your project has many features, enter them one by one separated by a comma. ', 
    'If you would like to, create guildines on how other developers can contribute to your poject.'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    `#${ProjectTitle} 
    
    ##Description
    ${Motivation}
    
    ##Table of Contents
    ${tableOfContents}
    
    `
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
