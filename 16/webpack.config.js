const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myLinkText: 'Hello World',
            template: './src/index.html',
            filename: 'index.html' //relative to root of the application
        })
   ],
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }]
    }
};