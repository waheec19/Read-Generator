const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
let fileName = 'Generated-README.md';


const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your username?',
        validate: githubInput => {
          if (githubInput) {
              return true;
          } else {
              console.log('Please enter your username!');
              return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
          if (emailInput) {
              return true;
          } else {
              console.log('Please enter your email!');
              return false;
          }
        }
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
          if (titleInput) {
              return true;
          } else {
              console.log('Please enter your title!');
              return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of the project you are working on.',
        validate: descInput => {
          if (descInput) {
              return true;
          } else {
              console.log('Please enter the description!');
              return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE-2.0', 'LGPL-3.0', 'BSL-1.0', 'None'],
      },
      {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
    
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
     
      },
     
      
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Generating README.md file...')
    );
}


function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    const readmeData = generateMarkdown(answers);
    writeToFile(fileName, readmeData)
  })
}


init();