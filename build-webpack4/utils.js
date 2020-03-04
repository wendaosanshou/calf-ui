const path = require('path')

// 获取根目录下路径
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

exports.default = {
  resolve
}