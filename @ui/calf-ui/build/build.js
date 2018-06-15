'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

require('shelljs/global')
const ora = require('ora')
// const rm = require('rimraf')
// const path = require('path')
// const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const utils = require('./utils')
const webpackConfig = require('./webpack.prod.conf')
const webpackModulesConfig = require('./webpack.modules.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

// const assetsPath = path.join(
//   config.build.assetsRoot,
//   config.build.assetsSubDirectory
// )
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

function modulesBuild() {
  buildPack(
    webpackConfig,
    function() {
      buildPack(
        webpackModulesConfig,
        function() {
          webpackModulesConfig.output.filename = utils.assetsPath(
            '[name]/[name].min.js'
          )
          webpackModulesConfig.output.chunkFilename = '[name]/[name].min.js'
          webpackModulesConfig.plugins.splice(
            2,
            1,
            new ExtractTextPlugin(utils.assetsPath('[name]/[name].min.css')),
            new OptimizeCSSPlugin({
              cssProcessorOptions: {
                safe: true
              }
            })
          )
          // 增加 UglifyJsPlugin
          webpackModulesConfig.plugins.splice(
            2,
            0,
            new webpack.optimize.UglifyJsPlugin({
              compress: {
                warnings: false
              }
            })
          )
          buildPack(
            webpackModulesConfig,
            null,
            'building for compressed component files...'
          )
        },
        'building for uncompressed component files...'
      )
    },
    'building for compressed files...'
  )
}

buildPack(webpackConfig)
modulesBuild()
