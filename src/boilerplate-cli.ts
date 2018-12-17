import chalk from 'chalk';
import * as program from 'commander';
import * as fs from 'fs';
import * as inquirer from 'inquirer';
import * as path from 'path';

import { Config, TYPE_LIBRARY, TYPE_PROJECT } from './common/Config';
import { createLibrary } from './library/create-library';
import { createProject } from './project/create-project';

let root: string;

const version: string = JSON.parse(
    fs.readFileSync(
        path.resolve(__dirname, '../package.json'),
        'utf8'
    )
).version;

program
    .version(version)
    .arguments('<dir>')
    .action((dir: string): void => {
        root = dir;
    })
    .option('-v, --verbose', 'Provide extra feedback')
    .parse(process.argv);

if (root === undefined) {
    console.log(chalk.bold.red(`Please provide a path`));
} else if (!fs.existsSync(root)) {
    console.log(chalk.bold.red(`Could not find given path "${root}"`));
} else {
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
        if (answers.type === TYPE_LIBRARY) {
            createLibrary(answers, root, program.verbose === true);
        } else if (answers.type === TYPE_PROJECT) {
            createProject(answers, root, program.verbose === true);
        } else {
            console.log(chalk.bold.red(`Unrecognized type: ${answers.type}`));
        }
    });
}
