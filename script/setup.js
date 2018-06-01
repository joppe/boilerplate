
if (process.argv.length < 4) {
    console.log('Please add "p" for project or "l" for lib and a name');
    
    return;
}

if (process.argv.length > 4) {
    console.log('Too many arguments')
    console.log('Please add "p" for project or "l" for lib and a name');
    
    return;
}

if (process.argv.length === 4 && ['l', 'p'].indexOf(process.argv[2]) === -1) {
    console.log(`Please add "p" for project or "l" for lib, provided ${process.argv[2]}`);
    
    return;
}

const fs = require('fs');
const isLib = process.argv[2] === 'l';
const name = process.argv[3];

function moveFile(sourcePath, targetPath, file) {
    fs.renameSync(`${sourcePath}${file}`, `${targetPath}${file}`);
}

function moveFiles(sourcePath, targetPath, files) {
    files.forEach(file => {
        moveFile(sourcePath, targetPath, file);
    });
}

function createDirs(root, dirs) {
    dirs.forEach(dir => {
        const path = `${root}/${dir}`;

        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    });
}

if (isLib) {
    createDirs(
        `${__dirname}/../`,
        [
            'dist',
            'doc',
            'src',
            'test',
            'test/unit',
        ]
    );

    moveFiles(
        `${__dirname}/lib/`,
        `${__dirname}/../`,
         [
            'package.json',
            'tsconfig.json',
            'tslint.json',
        ]
    );
} else {
    createDirs(
        `${__dirname}/../`,
        [
            'demo',
            'dist',
            'doc',
            'sass',
            'src',
            'test',
            'test/unit',
        ]
    );

    moveFiles(
        `${__dirname}/project/`,
        `${__dirname}/../`,
        [
            'index.html',
            'package.json',
            'tsconfig.json',
            'tslint.json',
            'webpack.config.js',
        ]
    );

    moveFiles(
        `${__dirname}/project/`,
        `${__dirname}/../sass`,
        [
            'main.jscss',
            'main.scss',
        ]
    );
}

const exec = require('child_process').exec;

exec('npm install', (error, stdout, stderr) => {
    console.log(`${stdout}`);
    console.log(`${stderr}`);
    
    if (error !== null) {
        console.log(`exec error: ${error}`);
    }
});
