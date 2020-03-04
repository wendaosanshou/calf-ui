'use strict'
const utils = require('./utils').default;
// const config = require('../config')
// const webpack = require('webpack')
// const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

// const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// console.log('utils', utils)
// function resolve(dir) {
//   return path.join(__dirname, '..', dir)
// }

var entry = {
  // app: resolve('./build-webpack4/webpack-test/main.js'),
  app: utils.resolve('./example/main.js')
  // app: resolve('./src/index.js')
}

var output = {
  publicPath: '', // js引用路径或者CDN地址
  path: utils.resolve('dist'), // 打包文件的输出目录
  filename: 'bundle.js'
}

const webpackConfig = {
  entry: entry,
  output: output,
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: output.paths,
    port: 8000,
    hot: true,
    overlay: true
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'style.css'
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: utils.resolve('./example/index.html'),
      chunks: ['app'],
      minify: {
        collapseWhitespace: true
      }
    })
  ]
}

module.exports = merge(baseWebpackConfig, webpackConfig)
