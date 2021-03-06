var webpack = require('webpack');
var path = require("path");

// ------------------------------------------------

var nodeEnv = process.env.NODE_ENV;
var debug = !nodeEnv || nodeEnv.indexOf('production') === -1;

// ------------------------------------------------

module.exports = {
    devtool: debug ? 'inline-sourcemap' : null,
    entry: {
        app: ["./src/main.js"]
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            exclude: /(node_modules|bower_components)/,
            loaders: [
                'classnames',
                'style?sourceMap',
                'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                'csslint',
                "sass"
            ]
        },{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
            }
        },{
            test: /\.(jpe?g|png|gif|svg)$/i,
            exclude: /(node_modules|bower_components)/,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
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