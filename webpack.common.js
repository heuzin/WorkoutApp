const path = require('path');
const webpack = require('webpack');

// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// if (process.env.NODE_ENV === 'development') {
//     require('dotenv').config({ path: '.env.development' })
// }

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node.modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
}