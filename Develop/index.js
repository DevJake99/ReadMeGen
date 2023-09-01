//  packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// an array of questions for user input
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
        name:'license',
        message:'What license does your project use?'
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

//  function to write README file
const generateReadMe = ({ProjectTitle, Motivation, tableOfContents, Steps, Credits, license, Features, contribute}) =>

    `#${ProjectTitle}
    
    ##Description
    ${Motivation}
    
    ##Table of Contents
    ${tableOfContents}
    
    ##Instillation
    ${Steps}
    
    ##Credits
    ${Credits}

    ##license
    ${license}

    ##Features
    ${Features}
    
    ##How to contribute
    ${contribute}`;

    // inquirer method to implement user input
    inquirer.prompt(questions)
    .then((answers) => {
        const pageContent = generateReadMe(answers);

        fs.writeFile('README.md', pageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });
    
   
// TODO: Create a function to initialize app
//init();

