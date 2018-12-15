import chalk from 'chalk';
import * as fs from 'fs';

export function copyFile(sourcePath: string, targetPath: string, file: string, renameTo?: string): void {
    const from: string = `${sourcePath}${file}`;
    const to: string = `${targetPath}${renameTo !== undefined ? renameTo : file}`;

    console.log(chalk.blue(`Copy file from: ${chalk.bold(from)} to: ${chalk.bold(to)}`));

    fs.copyFileSync(from, to);
}
