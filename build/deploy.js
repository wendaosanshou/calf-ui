var ora = require('ora')
var ftp = require('../config').demoBuild.ftp
var client = require('scp2')
var path = require('path')

var codePath = process.cwd()
var distPath = path.resolve(codePath, './docs/')
var spinner = ora('docs in deployment...')
spinner.start()

function deploy() {
  client.scp(
    distPath,
    {
      host: ftp.host,
      username: ftp.username,
      password: ftp.password,
      path: ftp.path
    },
    err => {
      spinner.stop()
      if (!err) {
        console.log('\n====== deploy success ======\n')
      } else {
        console.log('\n======  deploy error  ======\n')
        console.log('\n===== ' + err + ' =====\n')
      }
    }
  )
}

deploy()
