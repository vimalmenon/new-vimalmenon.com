const path = require("path");
const webpack  = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {CleanWebpackPlugin} = require("clean-webpack-plugin");


const config = require("./webpack/config");

module.exports = {
    mode: "production",
    entry: config.entry,
    output : {
        path : path.resolve(__dirname, './public'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.ts(x?)$/,
                loader: "source-map-loader"
            },
            {
                test: /\.ts(x?)$/,
                enforce: 'pre',
                use: [
                  {
                    options: {
                      eslintPath: require.resolve('eslint'),
            
                    },
                    loader: require.resolve('eslint-loader'),
                  },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    { 
                        loader: 'babel-loader'
                    },
                    {
                        loader: "ts-loader",
                    }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({            
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            title: "Application Title",
            hash: false,
            filename : './index.html',
            template: './index.html',
            inject: true,
        }),
        new CleanWebpackPlugin({
            dry: false,
            verbose: true,
            protectWebpackAssets: false,
            cleanOnceBeforeBuildPatterns: ['**/*']
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss"],
        alias : {
            "store": path.resolve(__dirname, "./assets/store"),
            "model": path.resolve(__dirname, "./assets/model"),
            "utility": path.resolve(__dirname, "./assets/utility"),
            "component": path.resolve(__dirname, "./assets/component"),
            "service": path.resolve(__dirname, "./assets/service"),
            "action": path.resolve(__dirname, "./assets/store/action")
        }
    }
};