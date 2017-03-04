/**
 * @author: @AngularClass
 */

module.exports = function (config) {
    const path = require('path');
    const webpackConfig = require('./webpack.config.js');

    delete webpackConfig.entry;
    delete webpackConfig.output;

    webpackConfig.devtool = 'inline-source-map';
    webpackConfig.module.rules = [
        /**
         * Source map loader support for *.js files
         * Extracts SourceMaps for source files that as added as sourceMappingURL comment.
         *
         * See: https://github.com/webpack/source-map-loader
         */
        {
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader'
        },

        {
            test: /\.ts$/,
            use: [
                {
                    loader: 'ts-loader',
                    query: {
                        // use inline sourcemaps for "karma-remap-coverage" reporter
                        sourceMap: false,
                        inlineSourceMap: true,
                        compilerOptions: {
                            // Remove TypeScript helpers to be injected
                            // below by DefinePlugin
                            removeComments: true,
                            target: 'es5'
                        }
                    }
                }
            ]
        },

        /**
         * Instruments JS files with Istanbul for subsequent code coverage reporting.
         * Instrument only testing sources.
         *
         * See: https://github.com/deepsweet/istanbul-instrumenter-loader
         */
        {
            enforce: 'post',
            test: /\.(js|ts)$/,
            loader: 'istanbul-instrumenter-loader',
            include: path.resolve('src'),
            exclude: [
                /\.(spec)\.ts$/,
                /node_modules/
            ]
        }

    ];

    const configuration = {

        // base path that will be used to resolve all patterns (e.g. files, exclude)
        basePath: '',

        /*
         * Frameworks to use
         *
         * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
         */
        frameworks: ['jasmine'],

        // list of files to exclude
        exclude: [],

        client: {
            captureConsole: false
        },

        /*
         * list of files / patterns to load in the browser
         *
         * we are building the test environment in ./spec-bundle.js
         */
        files: [
            {
                pattern: './spec-bundle.js',
                watched: false
            }
        ],

        /*
         * preprocess matching files before serving them to the browser
         * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
         */
        preprocessors: {
            './spec-bundle.js': [
                'coverage',
                'webpack',
                'sourcemap'
            ]
        },

        // Webpack Config at ./webpack.test.js
        webpack: webpackConfig,

        coverageReporter: {
            type: 'in-memory'
        },

        remapCoverageReporter: {
            'text-summary': null,
            json: './coverage/coverage.json',
            html: './coverage/html'
        },

        // Webpack please don't spam the console when running in karma!
        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i.e.
            noInfo: true,

            // and use stats to turn off verbose output
            stats: {
                // options i.e.
                chunks: false
            }
        },

        /*
         * test results reporter to use
         *
         * possible values: 'dots', 'progress'
         * available reporters: https://npmjs.org/browse/keyword/karma-reporter
         */
        reporters: [
            'progress',
            'coverage',
            'remap-coverage'
        ],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        /*
         * level of logging
         * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
         */
        logLevel: config.LOG_WARN,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        /*
         * start these browsers
         * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
         */
        browsers: [
            'PhantomJS'
        ],

        /*
         * Continuous Integration mode
         * if true, Karma captures browsers, runs the tests and exits
         */
        singleRun: true
    };

    config.set(configuration);
};
