"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const inquirer = require("inquirer");
const Config_1 = require("./common/Config");
const create_library_1 = require("./library/create-library");
const create_project_1 = require("./project/create-project");
console.log(chalk_1.default.green('Boilerplate CLI'));
console.log('');
inquirer.prompt([
    {
        type: 'input',
        message: 'Name',
        name: 'name',
        validate: (name) => {
            if (name.trim() !== '') {
                return true;
            }
            return 'Please provide a name';
        }
    },
    {
        type: 'list',
        message: 'Type',
        name: 'type',
        choices: [
            {
                name: 'Project'
            },
            {
                name: 'Library'
            }
        ],
        default: 'Project'
    },
    {
        type: 'confirm',
        message: 'Initialize Git',
        name: 'git',
        default: true
    }
])
    .then((answers) => {
    const root = process.cwd();
    if (answers.type === Config_1.TYPE_LIBRARY) {
        create_library_1.createLibrary(answers, root);
    }
    else if (answers.type === Config_1.TYPE_PROJECT) {
        create_project_1.createProject(answers, root);
    }
    else {
        console.log(chalk_1.default.bold.red(`Unrecognized type: ${answers.type}`));
    }
});
