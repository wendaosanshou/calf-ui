'use strict';
const utils = require('./utils').default;
const config = require('../config');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const entry = {
  calf: utils.resolve('./src/index.js')
};

const isBundleAnalyzer = process.env.BUILD_ENV === 'bundleAnalyzer'

console.log(process.env.BUILD_ENV)

const webpackConfig = merge(baseWebpackConfig, {
  entry: entry,
  mode: 'production',
  stats: {
    children: false,
    entrypoints: false,
    builtAt: false,
    modules: false,
    warnings: false
  },
  output: {
    path: config.build.assetsRoot, // 静态资源目录
    filename: 'index.js',
    library: 'calf',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log']
          }
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new CleanWebpackPlugin(),
    new OptimizeCSSAssetsPlugin()
  ]
});


if (isBundleAnalyzer) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig;
