// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data, userResponse) {
  // return `# ${data.title}

// `;
// }


function generateMarkdown(userResponse) {

    // creating table of contents if content is input to prompts
  
    let tableContents = `## Table of Contents`;
  
    if (userResponse.install !== '') {tableContents += ` * [Installation](#installation)`};
    if (userResponse.usage !== '') {tableContents += ` * [Usage](#usage)`};
    if (userResponse.tests !== '') {tableContents += ` * [Tests](#tests)`};
  
  
    let createMarkdown = `# ${userResponse.title}
  
    ## Description
  
    ${userResponse.description} `
  
    // table of contents
  
    createMarkdown += tableContents;
  
    // for license
  
    createMarkdown += ` * [License](#license)`;
  
    if 
  
  
  
  
  }
  
  
  
  module.exports = generateMarkdown;
  
  
  