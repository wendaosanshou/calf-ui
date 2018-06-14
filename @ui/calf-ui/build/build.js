'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

require('shelljs/global')
const ora = require('ora')
// const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const utils = require('./utils')
const webpackConfig = require('./webpack.prod.conf')
const webpackModulesConfig = require('./webpack.modules.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const assetsPath = path.join(
  config.build.assetsRoot,
  config.build.assetsSubDirectory
)
const rootPath = config.build.assetsRoot
// const spinner = ora('building for production...')
// spinner.start()
rm('-rf', rootPath)
// rm('-rf', assetsPath)
// mkdir('-p', assetsPath)
// cp('-R', 'static/*', assetsPath)

function buildPack(webpackConfig, cb, spinnerText) {
  var spinner = ora(spinnerText || 'building for uncompressed files...')
  spinner.start()
  // console.log(webpackConfig)
  webpack(webpackConfig, function(err, stats) {
    spinner.stop()
    if (err) {
      throw err
    }
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n'
    )
    cb && cb()
  })
}

function fullBuild(cb) {
  // build index.js
  buildPack(
    webpackConfig,
    function() {
      // build calf.min.js
      webpackConfig.output.filename = utils.assetsPath('[name].min.js')
      webpackConfig.output.chunkFilename = '[name].min.js'
      webpackConfig.plugins.splice(
        1,
        1,
        new webpack.DefinePlugin({
          'process.env': config.build.env
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new ExtractTextPlugin(utils.assetsPath('[name].min.css')),
        new OptimizeCSSPlugin({
          cssProcessorOptions: {
            safe: true
          }
        })
      )
      buildPack(
        webpackConfig,
        function() {
          cb && cb()
        },
        'building for calf.min.js'
      )
    },
    'building for index.js'
  )
}

function modulesBuild() {
  // build ${module}/index.js
  buildPack(
    webpackModulesConfig,
    function() {
      // build ${module}/${module}.min.js
      webpackModulesConfig.output.filename = utils.assetsPath(
        '[name]/[name].min.js'
      )
      webpackModulesConfig.output.chunkFilename = '[name]/[name].min.js'
      webpackModulesConfig.plugins.splice(
        1,
        1,
        new webpack.DefinePlugin({
          'process.env': config.build.env
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new ExtractTextPlugin(utils.assetsPath('[name]/[name].min.css')),
        new OptimizeCSSPlugin({
          cssProcessorOptions: {
            safe: true
          }
        })
      )
      buildPack(
        webpackModulesConfig,
        null,
        'building for ${module}/${module}.min.js'
      )
    },
    'building for ${module}/index.js'
  )
}

buildPack(webpackConfig)
// modulesBuild()
