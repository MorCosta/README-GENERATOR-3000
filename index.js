const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage instructions for your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project:',
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide guidelines for contributing to your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions for your project:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please provide your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email address:',
  },
];

// function to write README file
function writeToFile(fileName, data) {
  const outputPath = path.join(process.cwd(), fileName);
  fs.writeFile(outputPath, data, (err) => {
    if (err) {
      console.log('Error generating README file:', err);
    } else {
      console.log('README file generated successfully!');
    }
  });
}

function init() {
    inquirer.prompt(questions).then((answers) => {
      const markdown = generateMarkdown(answers);
      const fileName = 'README.md';
      writeToFile(fileName, markdown);
    });
  }
  
  // function call to initialize program
  init();