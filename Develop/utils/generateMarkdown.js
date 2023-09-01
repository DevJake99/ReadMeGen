// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeUrl = '';
  switch (license) {
    case 'MIT License':
      badgeUrl = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
      case 'GNU AGPLv3':
      badgeUrl = '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
      break;
    case 'Mozilla Public License 2.0':
      badgeUrl = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
      break;
    case 'Apache License 2.0':
      badgeUrl = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    case 'Boost Software License 1.0':
      badgeUrl = '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
      break;
    case 'The Unlicense':
      badgeUrl = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
      break;
    default:
      badgeUrl = '';
  }
  return badgeUrl;
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
