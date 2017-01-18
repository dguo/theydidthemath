/* eslint-env node */

module.exports = {
    entry: './src/entry.js',
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
        host: '0.0.0.0',
        port: 8080,
        open: false,
        stats: {
            chunks: false
        }
    }
};
