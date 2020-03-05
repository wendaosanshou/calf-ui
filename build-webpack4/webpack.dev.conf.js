'use strict'
const utils = require('./utils').default;
const config = require('../config')
// const webpack = require('webpack')
const merge = require('webpack-merge')
const portfinder = require('portfinder')
const baseWebpackConfig = require('./webpack.base.conf')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 入口配置
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
  devtool: config.dev.devtool,
  devServer: {
    contentBase: output.paths,
    host: config.dev.host,
    port: config.dev.port,
    hot: true,
    overlay: config.dev.overlay,
    stats: 'errors-only' // 去除多余的打印日志
  },
  plugins: [
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

let devWebpackConfig = merge(baseWebpackConfig, webpackConfig)

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(error)
    } else {
       // 更新端口
       devWebpackConfig.devServer.port = port
      // 新增链接地址打印
       devWebpackConfig.plugins.push(
         new FriendlyErrorsPlugin({
           compilationSuccessInfo: {
             messages: [
               `Your application is running here: http://${
                 devWebpackConfig.devServer.host
               }:${port}`
             ]
           },
           onErrors: utils.createNotifierCallback()
         })
       )
       resolve(devWebpackConfig)
    }
  })
})
