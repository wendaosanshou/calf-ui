'use strict';
const utils = require('./utils').default;
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig, {
  entry: config.example.entry,
  mode: 'production',
  devtool: false,
  output: {
    path: config.example.assetsRoot, // 静态资源目录
    publicPath: config.example.assetsPublicPath,
    filename: 'index.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new CleanWebpackPlugin(),
    new OptimizeCSSAssetsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'example/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    })
  ]
});

module.exports = webpackConfig;
