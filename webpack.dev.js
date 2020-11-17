const {merge} = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');

module.exports = merge(webpackCommonConfig, {
    mode: 'development',
    // devtool: 'cheap-module-eval-source-map',
    devServer: {
        host: 'localhost',
        port: 9999,
        open: true,
        hot: true,
        progress: true,
        contentBase: [
            'public'
        ]
    }
});
