Error.stackTraceLimit = 0;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function () {
};

function isJsFile(path) {
    return path.slice(-3) == '.js';
}

function isSpecFile(path) {
    return /\.spec\.(.*\.)?js$/.test(path);
}

function isBuiltFile(path, builtPaths) {
    return isJsFile(path) && builtPaths.reduce(function (keep, bp) {
        return keep || (path.substr(0, bp.length) === bp);
    }, false);
}

function initTesting(allSpecFiles) {
    return Promise.all(
        allSpecFiles.map(function (moduleName) {
            return System.import(moduleName);
        })
    ).then(__karma__.start, __karma__.error);
}

(function () {
    var builtPaths = ['/base'],
        allSpecFiles= Object.keys(window.__karma__.files)
            .filter(isSpecFile)
            .filter(function (path) {
                return isBuiltFile(path, builtPaths);
            });

    SystemJS.config({
        baseURL: 'base'
    });

    System.import('system.conf.js').then(function () {
        initTesting(allSpecFiles);
    });
}());
