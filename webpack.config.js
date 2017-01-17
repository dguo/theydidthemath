/* eslint-env node */

module.exports = {
    entry: './src/entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    devServer: {
        compress: true,
        inline: true,
        host: '0.0.0.0',
        port: 8080,
        open: false,
        stats: {
            chunks: false
        }
    }
};
