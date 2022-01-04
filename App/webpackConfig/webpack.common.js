/**
 * file: Webpack Common File
 * date: 2020-07-21
 * author: Frank
 * lastModify: Frank 2020-07-21
 */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/index.tsx',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.js$|.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.ts$|.tsx?$/,
                use: [{ loader: 'awesome-typescript-loader' }, { loader: 'eslint-loader' }],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|gif|pdf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        limit: 1024,
                    },
                },
            },
            {
                test: /\.(eot|ttf\svg)$/,
                use: {
                    loader: 'file-loader',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            APP_ENV: JSON.stringify(process.env.CEM),
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
            }),
        ],
        usedExports: true,
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'initial',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            automaticNameMaxLength: 30,
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'vendors',
                },
                default: {
                    priority: -20,
                    reuseExistingChunk: true,
                    name: 'common',
                },
            },
        },
    },
    output: {
        path: path.resolve(__dirname, '../build'),
    },
};
