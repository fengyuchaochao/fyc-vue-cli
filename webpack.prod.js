const {merge} = require('webpack-merge');
const webpack = require('webpack');
const {CleanWebpackPlugin}  = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackCommonConfig = require('./webpack.common');

module.exports = merge(webpackCommonConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                'public/*.ico'
            ]
        }),
    ]
});
