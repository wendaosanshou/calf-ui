'use strict';
const path = require('path');
const utils = require('./utils').default;
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log('processs', process.env.NODE_ENV);

const entry = {
  calf: utils.resolve('./src/index.js')
};

const webpackConfig = merge(baseWebpackConfig, {
  entry: entry,
  mode: 'production',
  devtool: false,
  output: {
    path: config.build.assetsRoot, // 静态资源目录
    filename: '[name].js',
    library: 'calf',
    libraryTarget: 'umd'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
      // cacheGroups: {
      //   commons: {
      //     name: 'commons', // 提取出来的文件命名
      //     chunks: 'initial', // initial表示提取入口文件的公共css及js部分
      //     // chunks: 'all' // 提取所有文件的公共部分
      //     minChunks: 2, // 表示提取公共部分最少的文件数
      //     minSize: 0 // 表示提取公共部分最小的大小
      //     // 如果发现页面中未引用公共文件，加上enforce: true
      //   }
      // }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: false,
      parallel: true
    }),
    new CleanWebpackPlugin(),
    new OptimizeCSSAssetsPlugin()
  ]
});

module.exports = webpackConfig;
