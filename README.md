# calf-ui

> 一个基于vue.js的金融级移动端ui组件库

## 相关链接

文档地址：[http://123.206.17.49/docs/#/](http://123.206.17.49/docs/#/)

demo地址：[http://123.206.17.49/docs/example/](http://123.206.17.49/docs/example/)

demo二维码：

![二维码](https://raw.githubusercontent.com/wendaosanshou/calf-ui/master/docs/assets/example-qrcode.png)

## 用法

### 安装

```shell
yarn add calf-ui -S
```

### 配置webpack

> 如果是自己搭建的vue项目，直接配置webpack.config.js；如果是vue-cli生成的项目，配置vue.config.js

#### 配置webpack的resolve和alias

```js
// webpack.conf.js
resolve: {
  extensions: ['.js', '.vue', '.css'],
  alias: {
    'calf-ui': 'calf-ui/lib'
  }
}
```

#### 配置vue.config.js

```js
// vue.config.js
chainWebpack: (config) => {
  config.resolve.alias.set('calf-ui', 'calf-ui/lib')
  config.resolve.extensions.add('.css')
}
```

### 配置`babel-plugin-import`

可以使用`babel-plugin-import`让`calf-ui`组件库支持按需引入

1、安装`babel-plugin-import`
```shell
yarn add babel-plugin-import -S
```

2、配置calf-ui按需引入
```js
// .babelrc
"plugins": [
  [
    "import",
    {
      "libraryName": "calf-ui",
      "libraryDirectory": "lib",
      "style": true
    }
  ]
]
```


### 全局引入
```js
import Vue from 'vue'
import 'calf-ui/lib/style.css'
import Calf from 'calf-ui'

Vue.use(Calf)
```

### 按需引入
```js
import Vue from 'vue'

import {
  Button,
  Captch,
  Popup,
  Dialog,
  Loading,
  ListPicker,
  CascadePicker,
  DatePicker,
  Notice,
  Picker,
  Progress,
  PullRefresh,
  Tab,
  Textarea,
  Toast,
  Switch
} from 'calf-ui'


Vue.use(Button)
Vue.use(Captch)
Vue.use(Popup)
Vue.use(ListPicker)
Vue.use(Progress)
Vue.use(Textarea)
Vue.use(Notice)
Vue.use(Switch)
Vue.use(PullRefresh)
Vue.use(Tab)
Vue.use(Loading)
Vue.use(Toast)
Vue.use(Picker)
Vue.use(CascadePicker)
Vue.use(DatePicker)
Vue.use(Dialog)
```

具体使用方法见[文档]([http://123.206.17.49/docs/#/](http://123.206.17.49/docs/#/))