import chalk from 'chalk';

import { Config } from '../common/Config';
import { copyFiles } from '../common/copy-files';
import { createDirs } from '../common/create-dirs';
import { initializeGit } from '../common/initialize-git';
import { installPackages } from '../common/install-packages';
import { updatePackageConfig } from '../common/update-package-config';

const ASSET_PATH: string = `${__dirname}/../../assets/project`;

export function createProject(config: Config, path: string): void {
    console.log(chalk.green(`Create project "${config.name}"`));

    createDirs(
        path,
        [
            'demo',
            'dist',
            'doc',
            'sass',
            'src',
            'test',
            'test/unit'
        ]
    );

    copyFiles(
        `${ASSET_PATH}/`,
        `${path}/`,
        [
            ['editorconfig', '.editorconfig'],
            ['gitignore', '.gitignore'],
            ['npmrc', '.npmrc'],
            ['index.html'],
            ['karma.conf.js'],
            ['package.json'],
            ['tsconfig.json'],
            ['tslint.json'],
            ['webpack.config.js']
        ]
    );

    copyFiles(
        `${ASSET_PATH}/sass/`,
        `${path}/sass/`,
        [
            ['main.jscss'],
            ['main.scss']
        ]
    );

    copyFiles(
        `${ASSET_PATH}/test/`,
        `${path}/test/`,
        [
            ['tslint.json']
        ]
    );

    updatePackageConfig(path, config.name);
    installPackages(path);

    if (config.git) {
        initializeGit(path);
    }
}
