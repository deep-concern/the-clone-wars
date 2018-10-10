const path = require('path');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /.json$/,
                loader: 'json-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
    },
    mode: process.env['NODE_ENV'] === 'production' ? 'production' : 'development',
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'templates', 'index.html'),
        }),
    ],
};
