import chalk from 'chalk';
import * as fs from 'fs';

export function createDirs(root: string, dirs: Array<string>): void {
    dirs.forEach((dir: string): void => {
        const path: string = `${root}/${dir}`;

        if (!fs.existsSync(path)) {
            console.log(chalk.magenta(`Create dir: ${chalk.bold(path)}`));

            fs.mkdirSync(path);
        }
    });
}
