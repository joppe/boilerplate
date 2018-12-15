import chalk from 'chalk';

import { copyFile } from './copy-file';

export function copyFiles(sourcePath: string, targetPath: string, files: Array<Array<string>>): void {
    files.forEach((names: Array<string>): void => {
        if (names.length === 1) {
            copyFile(sourcePath, targetPath, names[0]);
        } else if (names.length === 2) {
            copyFile(sourcePath, targetPath, names[0], names[1]);
        } else {
            console.log(chalk.bold.red('Cannot copy file, illegal config'));
        }
    });
}
