import chalk from 'chalk';
import * as childProcess from 'child_process';

export function initializeGit(path: string, verbose: boolean): void {
    if (verbose) {
        console.log(chalk.green('Initialize Git'));
    }

    childProcess.exec(`cd ${path} && git init`, (error: childProcess.ExecException | null, stdout: string, stderr: string): void => {
        if (verbose) {
            console.log(chalk.gray(`${stdout}`));
            console.log(chalk.yellow(`${stderr}`));
        }

        if (error !== null) {
            console.log(chalk.bold.red(`Error while initializing Git: ${error}`));
        }
    });
}
