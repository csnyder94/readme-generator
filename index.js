// Needed packages below
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown'); //"Imports" generateMarkdown file

//Array of questions for user input
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
        type: 'input',
        name: 'installation',
        message: 'What command should be ran to install dependencies?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage instructions of your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is your preferred license?',
        choices: ['MIT', 'Apache', 'Perl'],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What is the contribution guidelines of your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    
    
];

//Write to file function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Sucessfully created markdown file!')
    );
}

//Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data => {
        console.log(data);
        const markdownContent = generateMarkdown(data);
        console.log(markdownContent)
        writeToFile('./generatedReadme/README.md', markdownContent);
    })
}

// Function call to initialize app
init();
