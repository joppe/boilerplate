"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const fs = require("fs");
function createDirs(root, dirs) {
    dirs.forEach((dir) => {
        const path = `${root}/${dir}`;
        if (!fs.existsSync(path)) {
            console.log(chalk_1.default.magenta(`Create dir: ${chalk_1.default.bold(path)}`));
            fs.mkdirSync(path);
        }
    });
}
exports.createDirs = createDirs;
