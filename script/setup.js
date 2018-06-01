
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

function moveFile(sourcePath, targetPath, file) {
    const from = `${sourcePath}${file}`;
    const to = `${targetPath}${file}`;

    console.log(`moveFile from: ${from} to: ${to}`);
    
    fs.renameSync(from, to);
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
            console.log(`Create dir: ${path}`);

            fs.mkdirSync(path);
        }
    });
}

function installPackages() {
    const exec = require('child_process').exec;

    console.log('install packages');

    exec(`cd ${__dirname}/../ && npm install`, (error, stdout, stderr) => {
        console.log(`${stdout}`);
        console.log(`${stderr}`);
        
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
}

function updatePackageConfig(name) {
    const file = `${__dirname}/../package.json`;
    const contents = fs.readFileSync(file, 'utf8');
    const modified = contents.replace(/{{ name }}/g, name);

    console.log('update package.json');
    
    fs.writeFileSync(file, modified);
}

function createLib(name) {
    console.log(`create lib ${name}`);

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

    moveFiles(
        `${__dirname}/lib/test/`,
        `${__dirname}/../test/`,
         [
            'tslint.json',
        ]
    );

    updatePackageConfig(name);
    installPackages();
}

function createProject(name) {
    console.log(`create project ${name}`);

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
        `${__dirname}/../sass/`,
        [
            'main.jscss',
            'main.scss',
        ]
    );

    moveFiles(
        `${__dirname}/project/test/`,
        `${__dirname}/../test/`,
         [
            'tslint.json',
        ]
    );

    updatePackageConfig(name);
    installPackages();
}

if (process.argv[2] === 'l') {
    createLib(process.argv[3]);
} else {
    createProject(process.argv[3]);
}
