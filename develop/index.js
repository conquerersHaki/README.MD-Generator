//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// modules needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');


//array of questions for user input
const questions = [

    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
    },

        
    {
        type: 'input',
        message: "What is the name of your GitHub repository?",
        name: 'repo',
    },

    
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'project title',
    },

    
    {
        type: 'input',
        message: "Provide a description of your project.",
        name: 'description',
    },

    
    {
        type: 'input',
        message: "Explain the steps required to install your project.",
        name: 'installation',
    },

    
    {
        type: 'input',
        message: "Give instructions and examples of your project.",
        name: 'usage',
    },

    {
        type: 'input',
        message: "Offer guidelines on how other developers can contribute to your project code.",
        name: 'contributing'
    },

    
    {
        type: 'input',
        message: "Explain any tests for your project and examples of how ot run them.",
        name: 'tests',
    },

    {
        type: 'list',
        message: "Select the license you would like to use.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license',
    },


];

//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {

        if (err) {
            return console.log(err);
        }

        console.log("All done! Your README.md file has populated!");
    });
}

//async function to initialize app
async function init() {

    try {

        const userResponse = await inquirer.prompt(questions);
        console.log("Your response: ", userResponse);
        console.log("Thank you for your input!")

        console.log("Generating your README.md file...");
        const markdown = generateMarkdown(userResponse);
        console.log(markdown);

        await writeFile('README.md', markdown);

    } catch (error) {

        console.log(error);
    }
};

// Function call to initialize app
init();
