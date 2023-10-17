// required packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Variables to connect modules to application

const generateMarkdown = require("./utils/generateMardown");
const licenseBadge = require("./utils/license").licenseBadge;
const questions = require("./utils/questions").questions;
//for using async await
const writeFileAsync = util.promisify(fs.writeFile);

// function to initialize program and create README file
async function init() {
  try {
    const answers = await inquirer.prompt(questions);

    answers.licenseBadge = licenseBadge(answers.license);

    let readMeData = generateMarkdown(answers);

    await writeFileAsync("sample-README.md", readMeData);
  } catch (err) {
    throw err;
  }
}

// call to initialize program
init();
