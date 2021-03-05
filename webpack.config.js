const path = require("path");
const webpack  = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = require("./webpack/config");

const packageJson = require("./package.json");


module.exports = {
    mode: "development",
    entry: config.entry,
    devtool: "source-map",
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
        },
        proxy: {
            '/api': {
                 target: {
                    host: "0.0.0.0",
                    protocol: 'http:',
                    port: 8081
                },
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    },
    module: {
        rules: [
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
                test: /\.(scss|css)$/,
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
            {
                test: /\.(woff(2)?|ttf|eot|svg|jpe?g|png|gif|svg|jpg|pdf|ico|webmanifest)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.ts(x?)$/,
                loader: "source-map-loader"
            },
            {
                test: /\.core.worker\.ts$/,
                use: { 
                    loader: "worker-loader",
                    options :{
                        filename: 'worker.js',
                    }
                },
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
        new webpack.DefinePlugin({
            'VERSION' : `'${packageJson.version}'`
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss"],
        alias : {
            "store": path.resolve(__dirname, "./assets/store"),
            "model": path.resolve(__dirname, "./assets/model"),
            "model_admin": path.resolve(__dirname, "./assets/model/admin"),
            "utility": path.resolve(__dirname, "./assets/utility"),
            "component": path.resolve(__dirname, "./assets/component"),
            "component_admin": path.resolve(__dirname, "./assets/component/admin"),
            "service": path.resolve(__dirname, "./assets/service"),
            "action": path.resolve(__dirname, "./assets/store/action"),
            "const" : path.resolve(__dirname, "./assets/const"),
            "image": path.resolve(__dirname, "./assets/image/"),
        }
    }
};