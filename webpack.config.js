const path = require("path");
const webpack  = require("webpack");

const config = require("./webpack/config");

module.exports = {
    mode: "development",
    entry: config.entry,
    devServer: {
        publicPath: '/',
        contentBase: path.resolve(__dirname, "/public"),
        inline: true,
        port: 8080,
        historyApiFallback: true,
        watchOptions: {
            poll: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
};