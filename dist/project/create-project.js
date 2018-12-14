"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const copy_files_1 = require("../common/copy-files");
const create_dirs_1 = require("../common/create-dirs");
const initialize_git_1 = require("../common/initialize-git");
const install_packages_1 = require("../common/install-packages");
const update_package_config_1 = require("../common/update-package-config");
const ASSET_PATH = `${__dirname}/../../assets/project`;
function createProject(config, path) {
    console.log(chalk_1.default.green(`Create project "${config.name}"`));
    create_dirs_1.createDirs(path, [
        'demo',
        'dist',
        'doc',
        'sass',
        'src',
        'test',
        'test/unit'
    ]);
    copy_files_1.copyFiles(`${ASSET_PATH}/`, `${path}/`, [
        '.editorconfig',
        '.gitignore',
        '.npmrc',
        'index.html',
        'karma.conf.js',
        'package.json',
        'tsconfig.json',
        'tslint.json',
        'webpack.config.js'
    ]);
    copy_files_1.copyFiles(`${ASSET_PATH}/sass/`, `${path}/sass/`, [
        'main.jscss',
        'main.scss'
    ]);
    copy_files_1.copyFiles(`${ASSET_PATH}/test/`, `${path}/test/`, [
        'tslint.json'
    ]);
    update_package_config_1.updatePackageConfig(path, config.name);
    install_packages_1.installPackages(path);
    if (config.git) {
        initialize_git_1.initializeGit(path);
    }
}
exports.createProject = createProject;
