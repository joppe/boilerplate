import chalk from 'chalk';
import * as inquirer from 'inquirer';

import { Config, TYPE_LIBRARY, TYPE_PROJECT } from './common/Config';
import { createLibrary } from './library/create-library';
import { createProject } from './project/create-project';

console.log(chalk.green('Boilerplate CLI'));
console.log('');

// tslint:disable-next-line
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'Name',
            name: 'name',
            validate: (name: string): boolean | string => {
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
    ]
)
.then((answers: Config): void => {
    const root: string = process.cwd();

    if (answers.type === TYPE_LIBRARY) {
        createLibrary(answers, root);
    } else if (answers.type === TYPE_PROJECT) {
        createProject(answers, root);
    } else {
        console.log(chalk.bold.red(`Unrecognized type: ${answers.type}`));
    }
});
