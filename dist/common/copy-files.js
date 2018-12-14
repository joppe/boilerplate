"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const copy_file_1 = require("./copy-file");
function copyFiles(sourcePath, targetPath, files) {
    files.forEach((file) => {
        copy_file_1.copyFile(sourcePath, targetPath, file);
    });
}
exports.copyFiles = copyFiles;
