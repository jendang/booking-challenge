const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssCustomMedia = require('postcss-custom-media');

function resolve(dir) {
    return path.join(__dirname, dir);
}

const webpackConfig = {
    mode: 'development',
    devtool: '#cheap-module-source-map',
    entry: {
        react: ['react', 'react-dom'],
        app: resolve('./src/index.js')
    },
    output: {
        path: resolve('dist'),
        publicPath: '/',
        filename: 'js/taxi-e.[name].[hash].js',
        chunkFilename: 'js/taxi-e.[name].[hash].bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        alias: {
            components: resolve('./src/components'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    resolve('src')
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                   { loader: 'style-loader',},
                   { loader: 'css-loader',},
                   {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                ctx: {},
                                path: 'postcss.config.js',
                            },
                            ident: 'postcss',
                            plugins: () => [
                              postcssCustomMedia()
                            ]
                        },
                    },
                   { loader: 'sass-loader',},
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('./src/index.html'),
            production: false,
            reject: true,
        })
    ],

    devServer: {
        contentBase: resolve('dist'),
        compress: false,
        historyApiFallback: true,
        disableHostCheck: true,
        inline: true,
        hot: true,
        host: '0.0.0.0',
        port: 8081,
        watchOptions: {
            ignored: /node_modules|#|.swp$/,
            aggregateTimeout: 1000
        }
    }
}

module.exports = webpackConfig;