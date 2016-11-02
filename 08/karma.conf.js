var webpack = require('webpack');
var webpackConfig = require("./webpack.config");

module.exports = function (config) {
    config.set({
        autoWatch: true,
        basePath: '',
        browsers: [ 'Chrome' ],
        colors: true,
        exclude: [],
        frameworks: [ 'mocha', 'chai', 'sinon' ],
        files: [
            'tests/**/*.spec.ts',
            'tests/**/*.spec.tsx'
        ],
        logLevel: config.LOG_INFO,
        plugins: [
            "karma-*"
        ],
        port: 9876,
        preprocessors: {
            'tests/**/*.spec.ts': ['webpack', 'sourcemap'],
            'tests/**/*.spec.tsx': ['webpack', 'sourcemap']
        },
        reporters: [ 'mocha' ],
        singleRun: true,
        webpack: {
            devtool: 'inline-source-map',
            entry: webpackConfig.entry,
            module: webpackConfig.module,
            output: webpackConfig.output,
            plugins: webpackConfig.plugins,
            resolve: webpackConfig.resolve
        },
        webpackServer: {
            noInfo: true
        }
    });
};