'use strict';
// const utils = require('./utils');
const config = require('../config');
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);
const isProd = process.env.NODE_ENV === 'production';

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
// console.log(config);
// console.log(`${HOST}--${PORT}`);
console.log('--isProd--', isProd)

var entry = {
  app: './example/main.js'
};

var output = {
  publicPath: '', // js引用路径或者CDN地址
  path: resolve('dist'), // 打包文件的输出目录
  filename: 'bundle.js'
};

var jsExclude = file => /node_modules/.test(file) && !/\.vue\.js/.test(file);

module.exports = {
  entry: entry,
  output: output,
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@example': resolve('example'),
      'calf-ui': 'calf-ui/lib'
    }
  },
  devServer: {
    contentBase: output.paths,
    port: 8000,
    hot: true,
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: jsExclude
      },
      {
        test: /\.css$/,
        use: [isProd ? 'vue-style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new VueLoaderPlugin()
  ]
};
