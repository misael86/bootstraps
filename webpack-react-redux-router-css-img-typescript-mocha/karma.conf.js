/*
 * More detailed explanation here: http://karma-runner.github.io/0.13/config/configuration-file.html
 */

var webpackConfig = require("./webpack.config");

module.exports = function(config) {
    config.set({
        autoWatch: true,
        basePath: "",
        browsers: ["PhantomJS"],
        colors: true,
        exclude: [],
        files: [
            "tests/**/*.ts",
            "tests/**/*.tsx"
        ],
        frameworks: ["mocha", "chai", "sinon"],
        logLevel: config.LOG_INFO,
        plugins: [
            "karma-*"
        ],
        port: 9876,
        preprocessors: {
            "tests/**/*.ts": ["webpack"],
            "tests/**/*.tsx": ["webpack"], // Using karma-webpack npm module
        },
        reporters: ["mocha"],
        singleRun: false,
        webpack: webpackConfig
    });
};