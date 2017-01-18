/* eslint-env node */
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/entry.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    devServer: {
        compress: true,
        hot: true,
        host: '0.0.0.0',
        port: 8080,
        open: false,
        stats: {
            chunks: false
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};
