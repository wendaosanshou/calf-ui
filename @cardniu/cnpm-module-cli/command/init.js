'use strict'
const exec = require('child_process').exec
const co = require('co')
const prompt = require('co-prompt')
const chalk = require('chalk')
const templates = require('../template.json')

module.exports = () => {
  co(function *(){
    var projectName = yield prompt('project name:')
    // 获取模板地址
    if(!templates.tpl['base']){
      console.log(chalk.red('\n template does not exit!'))
      process.exit()
    }
    var gitUrl = templates.tpl['base'].url
    var branch = templates.tpl['base'].branch

    // git命令，远程拉取项目，并自定义项目名
    var cmdStr = `git clone ${gitUrl} ${projectName} && cd ${projectName} && git checkout ${branch}`
    exec(cmdStr, (error, stdout, stderr) => {
      if (error) {
        console.error('error: ' + error);
        return;
      }
      console.log(chalk.green('generate  completed !'))
      process.exit()
    })
  })
}
