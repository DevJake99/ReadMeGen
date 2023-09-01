// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


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

// TODO: Create a function to write README file
const generateReadMe = ({ProjectTitle, Motivation, tableOfContents, Steps, Credits, license, Features, contribute}) =>

/*function writeToFile(fileName, data){
    const content = */
    `#${ProjectTitle}
    ______________________________________
    
    ##Description
    ${Motivation}
    ______________________________________
    ##Table of Contents
    ${tableOfContents}
    ______________________________________
    ##Instillation
    ${Steps}
    ______________________________________
    ##Credits
    ${Credits}
    ______________________________________
    ##license
    ${license}
    ______________________________________
    ##Features
    ${Features}
    ______________________________________
    ##How to contribute
    ${contribute}`;

    inquirer.prompt(questions)
    .then((answers) => {
        const pageContent = generateReadMe(answers);

        fs.writeFile('README.md', pageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });
    
   /* fs.writeFile("README.md", data)
    .then(() => console.log('README file generated successfully'))
    .catch((err) => comsole.log('Error generating README file:', err));

 }*/

// TODO: Create a function to initialize app

/*let nobre = 'README';
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        fs.writeFile('nobre.md', answers);
    })
    .catch((err) => console.error('Error initializing application:', err));
}*/

// Function call to initialize app
//init();

