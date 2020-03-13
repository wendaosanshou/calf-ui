'use strict'
const utils = require('./utils').default;
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const eslintFriendlyFormatter = require('eslint-friendly-formatter')

// 过滤node_modules部分且防止导入的vue单文件组件里的script标签被排除
const jsExclude = file => /node_modules/.test(file) && !/\.vue\.js/.test(file)

module.exports = {
  entry: {},
  output: {},
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css'],
    alias: {
      '@example': utils.resolve('example'),
      'calf-ui': 'calf-ui/lib'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          formatter: eslintFriendlyFormatter,
          emitWarning: false
        }
      },
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
        include: /src|calf-ui/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
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
        use: [{
          loader: 'url-loader',
          options: {
            esModule: false,
            name: '[name]_[hash].[ext]',
            limit: 10240
          }
        }]
      }, {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader'
        } 
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
