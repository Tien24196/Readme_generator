// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [ {
    type: "input",
    name: "title",
    message: "What is the project title?",
},
{
    type: "input",
    name: "description",
    message: "Write a brief description of your project: "
},
{
    type: "input",
    name: "installation",
    message: "Describe the installation process if any: ",

},
{
    type: "input",
    name: "usage",
    message: "What is this project usage for?"
},
{
    type: "list",
    name: "license",
    message: "Chose the appropriate license for this project: ",
    choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Apache 2.0",
        "Boost Software 1.0",
        "MIT",
        "Mozilla",
        "No license"
    ]
},
{
    type: "input",
    name: "contributing",
    message: "Who are the contributors of this projects?"
},
{
    type: "input",
    name: "tests",
    message: "Is there a test included?"
},
{
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue? "
},
{
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: "
},
{
    type: "input",
    name: "email",
    message: "Please enter your email: "
}];


    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generatePage(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile("./README.md", data)
    })
}

// Function call to initialize app
init();
