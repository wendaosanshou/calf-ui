### 环境

> `calf-ui`是一个基于`vue`的移动端`ui`组件库

安装 cnpm 环境

```shell
yarn add calf-ui -S   # 安装依赖
```

### 用法

#### 配置webpack

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

2、添加`babel-plugin-import`的配置

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

### api 调用

我们对`dialog,captch,picker,cascade-picker,date-picker,list-picker,loading,toast`等组件提供的 `api` 调用的方式

全局引入`calf-ui`后，可以在组件内直接通过`this.$createXXX`来创建相关组件实例,通过调用该实例的`show`方法展示组件

比如:

```js
this.$createDialog({
  type: 'default',
  title: 'alert',
  content: 'dialog content'
}).show()
```

### 示例

```html
<template>
  <calf-button @click="showDialog">show dialog</calf-button>
</template>

<script>
  export default {
    methods: {
      showDialog() {
        this.$createDialog({
          type: 'default',
          title: 'alert',
          content: 'dialog content',
        }).show()
      }
    }
  }
</script>
```
