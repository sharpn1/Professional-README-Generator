const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a breif description of the project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Explain how to use the app',
    },
    {
      type: 'input',
      name: 'features',
      message: 'Explain the  features of the app',
    },
    {
      type: 'input',
      name: 'built with',
      message: 'What applications were used to build the app?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter your GitHub link to the GitHub app',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project.',
      choices: ['MIT', 'GPLv2', 'Apache'],
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('SAMPLE_README.md has been generated!');
      });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      const markdownContent = generateMarkdown(answers);
      writeToFile('Professional_README.md', markdownContent);
    });

}

// function call to initialize program
init();
