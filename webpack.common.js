const path = require('path');
const webpack = require('webpack');
const VueWebpackPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/main.js',
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'less-loader', 'css-loader']
            },
            {
                test: /\.png$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10 * 1024
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        new VueWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html'),
            title: '自定义vue脚手架',
        }),
        new webpack.DefinePlugin({
            BASE_URL: '"./public/"'
        }),
        // new MiniCssExtractPlugin()
    ]
};
