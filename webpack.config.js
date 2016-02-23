var path = require('path');
var config = {
    entry: path.resolve(__dirname, 'src/js/main.js'),
    output: {
        path: path.resolve(__dirname, 'assets/js'),
        filename: 'main.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'react']
            }
        }]
    }
};

module.exports = config;