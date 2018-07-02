### 环境

> `calf-ui`为卡牛内部基于`vue`的`ui`库，需要使用内网的`cnpm`环境

安装 cnpm 环境

```shell
npm install cnpm -g   # 全局安装cnpm
cnpm get registry   # 获取当前注册源
cnpm config set registry http://cnpm-registry.cardniu.work # 修改成内部注册源地址
cnpm get registry  # 确认修改是否成功
cnpm install calf-ui --save   # 安装依赖
```

#### npm 安装

> 使用 npm 快速安装依赖包

```shell
cnpm install @cardniu/calf-ui  --save
```

calf-ui 搭配 webpack 3+ 支持后编译和普通编译 2 种构建方式（默认使用后编译），使用前都需要修改应用的依赖和配置。

#### CDN 引入

```html
<script src="https://xxx.com/xxx.js"></script>
<link rel="stylesheet" href="https://xxx.com/xxx.min.css">
```

### 使用

> 使用`calf-ui`，需要先配置`webpack`的`alias`

```javascript
alias: {
  'calf-ui': '@cardniu/calf-ui/lib'
}
```

**全部引入**
一般在入口文件中：

```javascript
import Vue from 'vue'
import 'calf-ui/style.css'
import Calf from 'calf-ui'
Vue.use(Calf)
```

**按需引入**

```javascript
import Vue from 'vue'
import 'calf-ui/button/style.css'
import Button from 'calf-ui/button'
Vue.use(Button)
```

所有的可按需引入的组件以及模块：

```javascript
import 'calf-ui/style.css'
import Button from 'calf-ui/button'
import Captch from 'calf-ui/captch'
import Popup from 'calf-ui/popup'
import Dialog from 'calf-ui/dialog'
import Loading from 'calf-ui/loading'
import ListPicker from 'calf-ui/list-picker'
import CascadePicker from 'calf-ui/cascade-picker'
import DatePicker from 'calf-ui/date-picker'
import Notice from 'calf-ui/notice'
import Picker from 'calf-ui/picker'
import Progress from 'calf-ui/progress'
import PullRefresh from 'calf-ui/pull-refresh'
import Tab from 'calf-ui/tab'
import Textarea from 'calf-ui/textarea'
import Toast from 'calf-ui/toast'
import Switch from 'calf-ui/switch'

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

> 注意： 按需引入的话，是不会打包基础样式部分的，所以在使用的时候需要引入 style 模块。

> 我们推荐直接全局引入

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
