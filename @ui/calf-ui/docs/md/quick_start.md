#### npm 安装

> 使用 npm 快速安装依赖包

```shell
npm install calf-ui  --save
```

calf-ui 搭配 webpack 3+ 支持后编译和普通编译 2 种构建方式（默认使用后编译），使用前都需要修改应用的依赖和配置。

#### CDN 引入

```html
<script src="https://xxx.com/xxx.js"></script>
<link rel="stylesheet" href="https://xxx.com/xxx.min.css">
```

### 使用

**全部引入**
一般在入口文件中：

```javascript
import Vue from 'vue'
import 'calf-ui/lib/style.css'
import Calf from 'calf-ui'
Vue.use(Calf)
```

**按需引入**

```javascript
import Vue from 'vue'
import 'calf-ui/lib/button/style.css'
import Button from 'calf-ui/lib/button'
Vue.use(Button)
```

所有的可按需引入的组件以及模块：

```javascript
import 'calf-ui/lib/style.css'
import Button from 'calf-ui/lib/button'
import Captch from 'calf-ui/lib/captch'
import Popup from 'calf-ui/lib/popup'
import Dialog from 'calf-ui/lib/dialog'
import Loading from 'calf-ui/lib/loading'
import ListPicker from 'calf-ui/lib/list-picker'
import CascadePicker from 'calf-ui/lib/cascade-picker'
import DatePicker from 'calf-ui/lib/date-picker'
import Notice from 'calf-ui/lib/notice'
import Picker from 'calf-ui/lib/picker'
import Progress from 'calf-ui/lib/progress'
import PullRefresh from 'calf-ui/lib/pull-refresh'
import Tab from 'calf-ui/lib/tab'
import Textarea from 'calf-ui/lib/textarea'
import Toast from 'calf-ui/lib/toast'
import Switch from 'calf-ui/lib/switch'

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
