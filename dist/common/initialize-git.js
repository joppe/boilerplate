"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const childProcess = require("child_process");
function initializeGit(path) {
    console.log(chalk_1.default.green('Initialize Git'));
    childProcess.exec(`cd ${path} && git init`, (error, stdout, stderr) => {
        console.log(chalk_1.default.gray(`${stdout}`));
        console.log(chalk_1.default.yellow(`${stderr}`));
        if (error !== null) {
            console.log(chalk_1.default.bold.red(`Error while initializing Git: ${error}`));
        }
    });
}
exports.initializeGit = initializeGit;
