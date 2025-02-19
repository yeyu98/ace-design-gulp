const path = require('path')
const getBabelConfig = require('./babelConfig')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './index.ts',
    output: {
        library: 'ace-design',
        libraryTarget: 'umd',
        filename: 'ace-design.js',
        path: path.join(__dirname, 'dist/umd')
    },
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: getBabelConfig({isESM: false})
                    },
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                            happyPackMode: true
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    }
}