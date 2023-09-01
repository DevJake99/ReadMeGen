// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    default: return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.ProjecTitle}
    
  ##Description
  ${data.Motivation}
  
  ##Table of Contents
  ${data.tableOfContents}
  
  ##Instillation
  ${data.Steps}
  
  ##Credits
  ${data.Credits}
  
  ##license
  ${data.license}
  
  ##Features
  ${data.Features}
  
  ##How to contribute
  ${data.contribute}


`;
}

module.exports = generateMarkdown;
