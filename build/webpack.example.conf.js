'use strict';
const utils = require('./utils').default;
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig, {
  entry: config.example.entry,
  mode: 'production',
  stats: {
    children: false,
    entrypoints: false,
    builtAt: false,
    modules: false,
    warnings: false
  },
  output: {
    path: config.example.assetsRoot,
    publicPath: config.example.assetsPublicPath,
    filename: '[name].[chunkhash:8].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[chunkhash:8].css'
    }),
    new CleanWebpackPlugin(),
    new OptimizeCSSAssetsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: utils.resolve('./example/index.html'),
      chunks: ['app'],
      minify: {
        collapseWhitespace: true
      }
    })
  ]
});

module.exports = webpackConfig;
