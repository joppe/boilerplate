import chalk from 'chalk';
import * as fs from 'fs';

export function updatePackageConfig(path: string, name: string): void {
    const file: string = `${path}/package.json`;
    const contents: string = fs.readFileSync(file, 'utf8');
    const modified: string = contents.replace(/{{ name }}/g, name);

    console.log(chalk.green('Updated package.json'));

    fs.writeFileSync(file, modified);
}
