const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?includePaths[]=' + path.resolve(__dirname)
];

module.exports = {
    context: path.join(__dirname, 'wwwroot'),
    entry: {
        client: './client',
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'redux',
            'react-redux',
            'react-router-redux'
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'wwwroot/build'),
        publicPath: '/build'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')) }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new ExtractTextPlugin('[name].css')
    ],
    postcss: [
      autoprefixer({
          browsers: ['last 2 versions']
      })
    ],
    resolve: {
        modulesDirectories: [ 'node_modules' ],
        extensions: ['', '.js', '.jsx', '.scss'],
        root: [path.resolve(__dirname)]
    }
};