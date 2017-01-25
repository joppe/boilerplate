Error.stackTraceLimit = 0;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

// Don't trigger load event, we do that later when all spec files are imported
__karma__.loaded = function () {};

/**
 * Check if this is a path to a JavaScript file
 *
 * @param {string} path
 * @returns {boolean}
 */
function isJsFile(path) {
    return path.slice(-3) == '.js';
}

/**
 * Check if this is path to a spec file
 *
 * @param {string} path
 * @returns {boolean}
 */
function isSpecFile(path) {
    return /\.spec\.(.*\.)?js$/.test(path);
}

/**
 * Check if this path is a JavaScript file and part of the built path
 *
 * @param {string} path
 * @param {string} builtPath
 * @returns {boolean}
 */
function isBuiltFile(path, builtPath) {
    return isJsFile(path) && (path.substr(0, builtPath.length) === builtPath);
}

/**
 * Get all spec files that are in this built path
 *
 * @param {string[]} files
 * @param {string} builtPath
 * @returns {string[]}
 */
function getSpecFiles(files, builtPath) {
    return Object.keys(files)
        .filter(isSpecFile)
        .filter(function (path) {
            return isBuiltFile(path, builtPath);
        });
}

/**
 * Import all spec files, when done trigger karma start
 *
 * @param {string[]}allSpecFiles
 * @returns {Promise}
 */
function initTesting(allSpecFiles) {
    return Promise.all(
        allSpecFiles.map(function (moduleName) {
            return System.import(moduleName);
        })
    ).then(__karma__.start, __karma__.error);
}

(function () {
    var base = 'base';

    SystemJS.config({
        baseURL: base
    });

    System.import('system.conf.js').then(function () {
        initTesting(getSpecFiles(window.__karma__.files, '/' + base));
    });
}());
