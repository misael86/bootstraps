var nodeEnv = process.env.NODE_ENV;
var debug = !nodeEnv || nodeEnv.indexOf('production') === -1;
var webpack = require('webpack');
var path = require("path");

module.exports = {
    devtool: debug ? 'inline-sourcemap' : null,
    entry: {
        app: ["./src/main.js"]
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
            }
        }]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourcemap: false
        })
    ]
};