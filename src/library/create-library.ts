import chalk from 'chalk';

import { Config } from '../common/Config';
import { copyFiles } from '../common/copy-files';
import { createDirs } from '../common/create-dirs';
import { initializeGit } from '../common/initialize-git';
import { installPackages } from '../common/install-packages';
import { updatePackageConfig } from '../common/update-package-config';

export function createLibrary(config: Config, path: string): void {
    console.log(chalk.green(`Create library "${config.name}"`));

    createDirs(
        path,
        [
            'dist',
            'doc',
            'src',
            'test',
            'test/unit'
        ]
    );

    copyFiles(
        `${__dirname}/assets/`,
        path,
        [
            '.editorconfig',
            '.gitignore',
            '.npmrc',
            '.travis.yml',
            'karma.conf.js',
            'package.json',
            'tsconfig.json',
            'tslint.json'
        ]
    );

    copyFiles(
        `${__dirname}/assets/test/`,
        `${path}/test/`,
        [
            'tslint.json'
        ]
    );

    updatePackageConfig(path, config.name);
    installPackages(path);

    if (config.git) {
        initializeGit(path);
    }
}
