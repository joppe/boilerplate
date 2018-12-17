import chalk from 'chalk';

import { Config } from '../common/Config';
import { copyFiles } from '../common/copy-files';
import { createDirs } from '../common/create-dirs';
import { initializeGit } from '../common/initialize-git';
import { installPackages } from '../common/install-packages';
import { updatePackageConfig } from '../common/update-package-config';

const ASSET_PATH: string = `${__dirname}/../../assets/library`;

export function createLibrary(config: Config, path: string, verbose: boolean): void {
    if (verbose) {
        console.log(chalk.green(`Create library "${config.name}"`));
    }

    createDirs(
        path,
        [
            'dist',
            'doc',
            'src',
            'test',
            'test/unit'
        ],
        verbose
    );

    copyFiles(
        `${ASSET_PATH}/`,
        `${path}/`,
        [
            ['editorconfig', '.editorconfig'],
            ['gitignore', '.gitignore'],
            ['npmrc', '.npmrc'],
            ['travis.yml', '.travis.yml'],
            ['karma.conf.js'],
            ['package.json'],
            ['tsconfig.json'],
            ['tslint.json']
        ],
        verbose
    );

    copyFiles(
        `${ASSET_PATH}test/`,
        `${path}/test/`,
        [
            ['tslint.json']
        ],
        verbose
    );

    updatePackageConfig(path, config.name, verbose);
    installPackages(path, verbose);

    if (config.git) {
        initializeGit(path, verbose);
    }
}
