"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const fs = require("fs");
function updatePackageConfig(path, name) {
    const file = `${path}/package.json`;
    const contents = fs.readFileSync(file, 'utf8');
    const modified = contents.replace(/{{ name }}/g, name);
    console.log(chalk_1.default.green('Updated package.json'));
    fs.writeFileSync(file, modified);
}
exports.updatePackageConfig = updatePackageConfig;
