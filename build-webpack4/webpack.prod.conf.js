'use strict';
const utils = require('./utils').default;
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const entry = {
  calf: utils.resolve('./src/index.js')
};

const webpackConfig = merge(baseWebpackConfig, {
  entry: entry,
  mode: 'production',
  stats: {
    children: false,
    entrypoints: false,
    builtAt: false,
    modules: false,
    warnings: false
  },
  output: {
    path: config.build.assetsRoot, // 静态资源目录
    filename: 'index.js',
    library: 'calf',
    libraryTarget: 'umd'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new CleanWebpackPlugin(),
    new OptimizeCSSAssetsPlugin()
  ]
});

module.exports = webpackConfig;
