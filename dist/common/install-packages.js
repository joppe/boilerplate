"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const childProcess = require("child_process");
function installPackages(path) {
    console.log(chalk_1.default.green('Install NPM packages'));
    childProcess.exec(`cd ${path} && npm install`, (error, stdout, stderr) => {
        console.log(chalk_1.default.gray(`${stdout}`));
        console.log(chalk_1.default.yellow(`${stderr}`));
        if (error !== null) {
            console.log(chalk_1.default.bold.red(`Error while installing NPM packages: ${error}`));
        }
    });
}
exports.installPackages = installPackages;
