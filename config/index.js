'use strict'

const path = require('path')

// 获取根目录下路径
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  dev: {
    // 路径
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // 代理配置
    proxyTable: {},
    // dev-server配置
    host: 'localhost',
    port: 8080,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    // 使用eslint
    useEslint: true,
    // 使用eslint异常时的浏览器遮罩
    showEslintErrorsInOverlay: false,
    // Source Maps
    devtool: 'cheap-module-eval-source-map',
    // 使用cache-loader
    cacheBusting: true,
    // 开启css的source-map
    cssSourceMap: true
  },

  build: {
    // 路径配置
    index: resolve('lib/index.html'),
    assetsRoot: resolve('lib'),
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    // 是否开启sourceMap
    productionSourceMap: false,
    // sourceMap类型
    devtool: 'source-map',
    // 是个开启gzip
    productionGzip: false,
    // gzip的文件类型
    productionGzipExtensions: ['js', 'css'],
    // bundle分析的端口
    bundleAnalyzerReport: process.env.npm_config_report
  },

  example: {
    env: require('./prod.env'),
    index: resolve('example/index.html'),
    entry: {
      app: resolve('example/main.js')
    },
    assetsPublicPath: 'http://123.206.17.49/docs/example/',
    assetsRoot: resolve('docs/example'),
    assetsSubDirectory: '',
    productionSourceMap: false,
    bundleAnalyzer: false,
    speedMeasure: true,
    ftp: {
      host: '',
      username: '',
      password: '',
      path: ''
    }
  }
}
