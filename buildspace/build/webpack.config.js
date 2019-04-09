const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../a.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    }
};