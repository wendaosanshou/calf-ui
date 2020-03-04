'use strict'
// const utils = require('./utils');
// const config = require('../config')
// const webpack = require('webpack')
// const merge = require('webpack-merge')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const HOST = process.env.HOST
// const PORT = process.env.PORT && Number(process.env.PORT)
const isProd = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
// console.log(config);
// console.log(`${HOST}--${PORT}`);
console.log('--isProd--', isProd)

var entry = {
  // app: resolve('./build-webpack4/webpack-test/main.js'),
  app: resolve('./example/main.js')
  // app: resolve('./src/index.js')
}

var output = {
  publicPath: '', // js引用路径或者CDN地址
  path: resolve('dist'), // 打包文件的输出目录
  filename: 'bundle.js'
}

// 过滤node_modules部分且防止导入的vue单文件组件里的script标签被排除
var jsExclude = file => /node_modules/.test(file) && !/\.vue\.js/.test(file)

module.exports = {
  entry: entry,
  output: output,
  mode: 'development',
  devtool: 'cheap-eval-source-map',
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
        test: /\.(post)?css$/, // 匹配css或postcss格式的文件
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              alias: {
                '~': resolve('./src')
              }
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]_[hash:base64:8]'
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:5].min.[ext]',
              limit: 20000,
              publicPath: 'static/',
              outputPath: 'static/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'style.css'
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('./example/index.html'),
      chunks: ['app'],
      minify: {
        collapseWhitespace: true
      }
    }),
    new VueLoaderPlugin()
  ]
}
