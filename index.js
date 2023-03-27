// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is your preferred license?',
        choices: ['None', 'MIT', 'Apache'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Sucessfully created markdown file!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data => {
        console.log(data);
        const markdownContent = generateMarkdown(data);
        console.log(markdownContent)
        writeToFile('./dist/README.md', markdownContent);
    })
}

// Function call to initialize app
init();
