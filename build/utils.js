const path = require('path')
const packageConfig = require('../package.json')

// 获取根目录下路径
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

// 发送通知
function createNotifierCallback() {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

exports.default = {
  resolve,
  createNotifierCallback
}