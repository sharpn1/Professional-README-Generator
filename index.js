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
      message: 'Write a breif description of the project.',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Explain how to install the project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Explain how to use the app',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project.',
      choices: ['MIT', 'Mozilla', 'Apache'],
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Write examples and how to run tests for your application.',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'List the names of the contributer(s).',
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
