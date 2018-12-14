"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const fs = require("fs");
function copyFile(sourcePath, targetPath, file) {
    const from = `${sourcePath}${file}`;
    const to = `${targetPath}${file}`;
    console.log(chalk_1.default.blue(`Copy file from: ${chalk_1.default.bold(from)} to: ${chalk_1.default.bold(to)}`));
    fs.copyFileSync(from, to);
}
exports.copyFile = copyFile;
