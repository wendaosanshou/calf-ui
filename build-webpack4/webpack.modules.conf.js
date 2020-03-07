'use strict';
const path = require('path')
const fs = require('fs')
const utils = require('./utils').default;
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 获取module文件夹的入口js文件
function getModulesEntry () {
  var modules = {}
  var cPath = path.join(__dirname, '../src/modules')
  var files = fs.readdirSync(cPath)
  if (files) {
    files.forEach(function(name) {
      var modulesPath = path.join(cPath, name)
      if (fs.statSync(modulesPath).isDirectory()) {
        modules[name] = modulesPath
      }
    })
  }
  return modules
}

const webpackConfig = merge(baseWebpackConfig, {
  entry: getModulesEntry(),
  mode: 'production',
  devtool: false,
  stats: {
    children: false,
    entrypoints: false,
    builtAt: false,
    modules: false,
    warnings: false
  },
  output: {
    path: config.build.assetsRoot, // 静态资源目录
    filename: '[name]/index.js',
    library: 'calf',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/style.css'
    }),
    new OptimizeCSSAssetsPlugin()
  ]
});

module.exports = webpackConfig;
