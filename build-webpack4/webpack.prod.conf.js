'use strict';
// const path = require('path');
const utils = require('./utils').default;
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// console.log('processs', process.env.NODE_ENV);

const entry = {
  calf: utils.resolve('./src/index.js')
  // calf: utils.resolve('./src/test.js')
};

const webpackConfig = merge(baseWebpackConfig, {
  entry: entry,
  // mode: 'production',
  mode: 'development',
  devtool: false,
  output: {
    path: config.build.assetsRoot, // 静态资源目录
    filename: 'index.js',
    library: 'calf',
    libraryTarget: 'umd'
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    // new UglifyJsPlugin({
    //   uglifyOptions: {
    //     compress: {
    //       warnings: false
    //     }
    //   },
    //   sourceMap: false,
    //   parallel: true
    // }),
    new CleanWebpackPlugin(),
    new OptimizeCSSAssetsPlugin()
  ]
});

module.exports = webpackConfig;
