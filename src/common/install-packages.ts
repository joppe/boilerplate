import chalk from 'chalk';
import * as childProcess from 'child_process';

export function installPackages(path: string): void {
    console.log(chalk.green('Install NPM packages'));

    childProcess.exec(`cd ${path} && npm install`, (error: childProcess.ExecException | null, stdout: string, stderr: string): void => {
        console.log(chalk.gray(`${stdout}`));
        console.log(chalk.yellow(`${stderr}`));

        if (error !== null) {
            console.log(chalk.bold.red(`Error while installing NPM packages: ${error}`));
        }
    });
}
