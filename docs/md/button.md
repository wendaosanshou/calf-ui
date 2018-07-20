
### Button
***

?>按钮，提供几种基础样式和尺寸，可自定义图标。

##### 引入

```javascript
// 全局引入
import 'calf-ui/style.css'
import Calf from 'calf-ui'
Vue.use(Calf)

// 局部引入
import 'calf-ui/button/style.css'
import Button from 'calf-ui/button'
Vue.use(Button)
```

##### 例子

示例体验：http://www.calf-ui.com/#/button


##### 使用
1.按钮提供 【/灰色/白底镂空/橙色】对应3种场景 分为 禁止 正常失效；
分别对应【.btn-primary/.btn-danger/.btn-warning/.btn-disabled/.btn-hollow】；

2.按钮分为普通按钮、块级按钮；


##### 代码片段
```html
  <calf-button>按钮（正常）</calf-button>
    <calf-button :disabled="true">按钮（禁止）</calf-button>
    <calf-button :invalid="true">按钮（失效）</calf-button>
    <calf-button :inline="true">确定</calf-button>
    <calf-button :minor="true">次要按钮</calf-button>
    <calf-button :minor="true" :disabled="true">次要按钮</calf-button>
    <calf-button :minor="true" :invalid="true">次要按钮</calf-button>
    <calf-button>
      <span slot="content">按钮文案</span>
      <span slot="desc">离结束还有：01天07时40分47秒</span>
    </calf-button>
    <calf-button :disabled="true">
      <span slot="content">按钮文案</span>
      <span slot="desc">离结束还有：01天07时40分47秒</span>
    </calf-button>
    <calf-button :invalid="true">
      <span slot="content">按钮文案</span>
      <span slot="desc">离结束还有：01天07时40分47秒</span>
    </calf-button>
    <calf-button :icon="icon" @click="handleLoading">触发loading</calf-button>
    <calf-button @click="handleClick">触发弹窗</calf-button>
    <calf-button @click="handleBack">返回</calf-button>
```


```javascript
export default {
  data() {
    return {
      tid: '',
      icon: ''
    }
  },
  methods: {
    handleClick() {
      this.$createDialog({
        content: '银行预留手机号码用于银行卡进行快捷',
        onConfirm: () => {
          console.log('confirm')
        }
      }).show()
    },
    handleLoading() {
      this.icon = 'loading'
      clearTimeout(this.tid)
      this.tid = setTimeout(() => {
        this.icon = 'success'
      }, 3000)
    },
    handleBack() {
      history.go(-1)
    }
  }
}
```


#### API

| 参数 | 说明 | 类型 | 可选值 | 默认值
| - | :-: | -: | -: | -: | 
| disabled  | 禁用状态| Boolean | | false
| invalid  | 失效状态| Boolean | | false
| inline  | 是否块级| Boolean | | false
| minor  | 次要按钮| Boolean | | false
| handleBack  | 返回事件| function | | false
| handleClick  | 触发弹窗| function | | false



#### Slot

| 参数 | 说明 
| - | :-: | 
| content  | 按钮文字
| desc  | 按钮小字描述