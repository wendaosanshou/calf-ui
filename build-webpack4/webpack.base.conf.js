'use strict'
const utils = require('./utils').default;
// const config = require('../config')
// const webpack = require('webpack')
// const merge = require('webpack-merge')
// const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const HOST = process.env.HOST
// const PORT = process.env.PORT && Number(process.env.PORT)
// const isProd = process.env.NODE_ENV === 'production'


// var entry = {
//   // app: resolve('./build-webpack4/webpack-test/main.js'),
//   app: utils.resolve('./example/main.js')
//   // app: resolve('./src/index.js')
// }

// var output = {
//   publicPath: '', // js引用路径或者CDN地址
//   path: utils.resolve('dist'), // 打包文件的输出目录
//   filename: 'bundle.js'
// }

// 过滤node_modules部分且防止导入的vue单文件组件里的script标签被排除
var jsExclude = file => /node_modules/.test(file) && !/\.vue\.js/.test(file)

module.exports = {
  entry: {},
  output: {},
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@example': utils.resolve('example'),
      'calf-ui': 'calf-ui/lib'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: jsExclude
      },
      {
        test: /\.(post)?css$/, // 匹配css或postcss格式的文件
        exclude: /node_modules/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              alias: {
                '~': utils.resolve('./src')
              }
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
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
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 10240
          }
        } 
      }, {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader'
        } 
      }
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'style.css'
    // }),
    new VueLoaderPlugin()
  ]
}
