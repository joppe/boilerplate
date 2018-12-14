import { copyFile } from './copy-file';

export function copyFiles(sourcePath: string, targetPath: string, files: Array<string>): void {
    files.forEach((file: string): void => {
        copyFile(sourcePath, targetPath, file);
    });
}
