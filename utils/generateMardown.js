// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${data.licenseBadge}
  # ${data.title}
  
    ${data.description}
  
  ---
  ## Contents
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contribution](#contribution)
  5. [Tests](#tests)
  
  ---
  ## Installation:
    ${data.installation}
    
  ---
  ## Usage
    ${data.usage}

  ---
  ## License
    License used for this project - ${data.license}
    * For more information on license types, please reference this website
    for additional licensing information - [https://choosealicense.com/](https://choosealicense.com/).
  
  ---
  ## Contribution:
    
    To contribute to this application, create a pull request.
    Here are the steps needed for doing that:
    - Fork the repo
    - Create a feature branch (git checkout -b NAME-HERE)
    - Commit your new feature (git commit -m 'Add some feature')
    - Push your branch (git push)
    - Create a new Pull Request
  
    Following a code review, your feature will be merged.
  
  ---
  ## Tests:
    ${data.tests}
  
  ---
  ## Contact:
  * GitHub Username: [${data.username}](https://github.com/${data.username})
  * GitHub Email: ${data.email}
    
  `;
}

module.exports = generateMarkdown;
