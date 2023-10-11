//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { message } = require('statuses');


//array of questions for user input
inquirer.prompt (
    [
        
        {
            type: 'input',
            message: "What is the title of your project?",
            name: 'title',
            validate: (value) => {if(value){return true} else {return 'Please enter required info to continue.'}},
        },

        
        {
            type: 'input',
            message: "Provide a description of your project.",
            name: 'description',
            validate: (value) => {if(value){return true} else {return 'Please enter required info to continue.'}},
        },

        
        {
            type: 'input',
            message: "Explain the steps required to install your project.",
            name: 'installation',
            validate: (value) => {if(value){return true} else {return 'Please enter required info to continue.'}},
        },

        
        {
            type: 'input',
            message: "Give instructions and examples of your project.",
            name: 'usage',
            validate: (value) => {if(value){return true} else {return 'Please enter required info to continue.'}},
        },

        {
            type: 'input',
            message: "Offer guidelines on how other developers can contribute to your project code.",
            name: 'contributiion',
            validate: (value) => {if(value){return true} else {return 'Please enter required info to continue.'}},
        },

        
        {
            type: 'input',
            message: "Explain any tests for your project and examples of how ot run them.",
            name: 'tests',
            validate: (value) => {if(value){return true} else {return 'Please enter required info to continue.'}},
        },

        {
            type: 'list',
            message: "Select the license you would like to use.",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            name: 'license',
            validate: (value) => {if(value){return true} else {return 'Please enter required info to continue.'}},
        },

        {
            type: 'input',
            message: "Enter your email in case anyone would like to reach you reagarding this project.",
            name: 'email',
            validate: (value) => {if(value){return true} else {return 'Please enter required info to continue.'}},
        },

        {
            type: 'input',
            message: "What is your GitHub username?",
            name: 'username',
            validate: (value) => {if(value){return true} else {return 'Please enter required info to continue.'}},
        },

    ]
).then(( {
    title,
    description,
    installation,
    usage,
    contribution,
    tests,
    license,
    email,
    username

// template for user input
}) => {
    const template = `## ${title}
    

    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Tests](#tests)
    * [License](#License)
    
    ## Description
    ${Description}

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## Contribution
    ${contribution}

    ## Tests
    ${tests}

    ## License
    ${license}

    # Contact
    GitHub: ${username}
    Email: ${email}`;

    // to create the readme file
    createNewFile(title, template);
}
);

// function for creating the readme file

function createNewFile(fileName, template) {
    // adding the file, changing it to lowercase to be compatible. if theres an error, log it
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if(err) {
            console.log(err)
        }
        // we did it kids
        console.log('All done! Your README.MD file has been generated!');
    });
};