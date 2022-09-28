const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./src/readme-template');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the title of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Please describe your project.'
        },
        {
            type: 'input',
            name: 'installInstructions',
            message: 'How does the user install your project?'
        },
        {
            type: 'input',
            name: 'usageInstructions',
            message: 'How is your project meant to be used?'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Which license does your project use?',
            choices: ['Apache', 'GNU', 'MIT', 'ISC']
        },
        {
            type: 'input',
            name: 'contributors',
            message: "Who were your project's contributors?"
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'If you wrote tests for your project, please provide instructions for running them.'
        }
    ])
}

promptUser()