const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: {serverEntry: ['./src/index.js']},
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].[contenthash].js",
        publicPath: ""
    },
    mode: "production",
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                type: "asset",
                test: /\.xml$/i,
                use: "raw-loader",
                exclude: /node_modules/
            },           
            {
                type: "asset",
                test: /\.(png|jpg|svg|jpeg|gif)$/i,
            }
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        fallback: {
            "stream": false,
            "fs": false
          }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new NodePolyfillPlugin()
    ],
};