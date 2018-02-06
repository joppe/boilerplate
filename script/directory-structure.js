const fs = require('fs');
const dirs = [
    'demo',
    'dist',
    'doc',
    'sass',
    'src',
    'test'
];

dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
});
