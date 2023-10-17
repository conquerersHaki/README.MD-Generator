const questions = [
        
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
            message: "Explain any tests for your project and examples of how to run them.",
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

module.exports = {
    questions: questions,
};