import chalk from 'chalk';

import { copyFile } from './copy-file';

export function copyFiles(sourcePath: string, targetPath: string, files: Array<Array<string>>, verbose: boolean): void {
    files.forEach((names: Array<string>): void => {
        if (names.length === 1) {
            copyFile(sourcePath, targetPath, names[0], undefined, verbose);
        } else if (names.length === 2) {
            copyFile(sourcePath, targetPath, names[0], names[1], verbose);
        } else {
            console.log(chalk.bold.red('Cannot copy file, illegal config'));
        }
    });
}
