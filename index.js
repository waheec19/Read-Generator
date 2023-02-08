const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");


const questions = [
    {
        type: "input",
        name: "GitHubUsername",
        message: "What is your GitHub Username?"
    },
    {
        type: "input",
        name: "ProjectTitle",
        message: "What would you like your Project Title to be named?"
    },
    {
        type: "input",
        name: "ProjectDescription",
        message: "Please write a short description of your project."
    },
    {
        type: "input",
        name: "Install",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "Usage",
        message: "Please provide examples of how your project could be used."
    },
    {
        type: "list",
        name: "License",
        message: "Choose what license you would like to use for your project.",
        choices: [{
            name: "GNU General Public License v3.0",
            },
            {
            name: "MIT License"
            },
            {
            name: "The Unlicense"
            },
            {
            name: "Apache License 2.0"
            }]
    },
    {
        type: "input",
        name: "Contributors",
        message: "How many contributors will there be on your project?",
        validate: validateContributors
    },
    {
        type: "input",
        name: "FAQ1",
        message: "How do you initialize the project?"
    }

];

function validateContributors(num)
{
   var reg = /^\d+$/;
   return reg.test(num) || "Please enter a valid number";
}

function promptUser(){
    return inquirer.prompt(questions)
}


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err){
            console.error(err);
        }
    });
}

async function init() {
    console.log("Welcome to the README Generator!")
    try {
        const answers = await promptUser();
        const user = await api.getUser(answers.GitHubUsername);
        const readMe = generateMarkdown(answers, user);
        writeToFile("GeneratedREADME.md", readMe);
        console.log("**README file successfully created!**");
        
    }catch(err) {
        console.log(err);
        
    }
    

}

init();