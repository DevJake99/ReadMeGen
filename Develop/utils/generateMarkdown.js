const userInput = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeUrl = '';
  switch (license) {
    case 'MIT':
      badgeUrl = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
      case 'GNU AGPL':
      badgeUrl = '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
      break;
    case 'Mozilla':
      badgeUrl = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
      break;
    case 'Apache License':
      badgeUrl = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    case 'Boost Software License':
      badgeUrl = '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
      break;
    case 'The Unlicense':
      badgeUrl = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
      break;
    default:
      badgeUrl = '';
  }
  return badgeUrl;
};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseUrl = '';
  switch(license){
    case 'MIT':
      licenseUrl= 'https://opensource.org/licenses/MIT';
      break;
    case 'GNU AGPL':
      licenseUrl='![License: GNU AGPL](https://www.gnu.org/licenses/agpl-3.0.en.html#license-text)';
      break;
    case 'Mozilla':
      licenseUrl ='![License: Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)' ;
      break;
    case 'Apache License':
      licenseUrl='![License: Apache License Version 2.0](https://choosealicense.com/licenses/apache-2.0/)';
      break;
    case 'Boost Software License':
      licenseUrl="![License: Boost Software License ](https://choosealicense.com/licenses/bsl-1.0/)";
      break;
    case 'The Unlicense':
      licenseUrl ="![License: The Unlicense](https://choosealicense.com/licenses/unlicense/)";
      break;
      default:
        licenseUrl = '';
  }
  return licenseUrl;
}

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

module.exports = {
  renderLicenseBadge,
  renderLicenseLink
  
 }

