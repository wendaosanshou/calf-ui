'use strict';
const utils = require('./utils').default;
const config = require('../config');
const webpack = require('webpack');
const merge = require('webpack-merge');
const portfinder = require('portfinder');
const baseWebpackConfig = require('./webpack.base.conf');
const version = require('../package.json').version;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const entry = {
  app: utils.resolve('./example/main.js')
};

// const output = {
//   publicPath: '', // js引用路径或者CDN地址
//   path: utils.resolve('dist'), // 打包文件的输出目录
//   filename: 'bundle.js'
// };

const webpackConfig = {
  entry: entry,
  output: {},
  mode: 'development',
  devtool: config.dev.devtool,
  devServer: {
    contentBase: config.example.assetsRoot,
    host: config.dev.host,
    port: config.dev.port,
    hot: true,
    overlay: config.dev.overlay,
    stats: 'errors-only',
    hotOnly: true
  },
  plugins: [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(version)
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: utils.resolve('./example/index.html'),
      chunks: ['app'],
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

let devWebpackConfig = merge(baseWebpackConfig, webpackConfig);

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port;
  portfinder.getPort((err, port) => {
    if (err) {
      reject(error);
    } else {
      // 更新端口
      devWebpackConfig.devServer.port = port;
      // 新增链接地址打印
      devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`]
          },
          onErrors: utils.createNotifierCallback()
        })
      );
      resolve(devWebpackConfig);
    }
  });
});
