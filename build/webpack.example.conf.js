'use strict';
const utils = require('./utils').default;
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

let webpackConfig = merge(baseWebpackConfig, {
  entry: config.example.entry,
  mode: 'production',
  stats: {
    children: false,
    entrypoints: false,
    builtAt: false,
    modules: false,
    warnings: false
  },
  output: {
    path: config.example.assetsRoot,
    publicPath: config.example.assetsPublicPath,
    filename: '[name].[contenthash:8].js'
  },
  optimization: {
    splitChunks: {
      automaticNameDelimiter: '.',
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
          name: 'common',
          minSize: 0,
          priority: 1,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          name: 'vendor',
          // name(module) {
          //   const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
          //   return `${packageName.replace('@', '')}`;
          // },
          priority: 10,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css'
    }),
    new CleanWebpackPlugin(),
    new OptimizeCSSAssetsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: utils.resolve('./example/index.html'),
      chunks: ['app'],
      minify: {
        collapseWhitespace: true
      }
    })
  ]
});

if (config.example.bundleAnalyzer) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

if (config.example.speedMeasure) {
  const smp = new SpeedMeasurePlugin();
  webpackConfig = smp.wrap(webpackConfig);
}


module.exports = webpackConfig;
