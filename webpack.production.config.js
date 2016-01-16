var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

var config = {
    entry: {
        app: './app/index.js',
        vendor: ['angular', 'oclazyload']
    },
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        // new ngAnnotatePlugin({
        //    add: true
        // }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                mangle: false
            }
        }),
         new webpack.DefinePlugin({
          ON_DEMO: process.env.NODE_ENV === 'demo'
        })
    ]
};

module.exports = config;