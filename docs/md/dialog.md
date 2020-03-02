### Dialog

---

?>弹出框，拥有非常灵活的调用方式。

##### 引入

```javascript
// 全局引入
import 'calf-ui/style.css'
import Calf from 'calf-ui'
Vue.use(Calf)

// 局部引入
import 'calf-ui/dialog/style.css'
import Dialog from 'calf-ui/dialog'
Vue.use(Dialog)
```

##### 例子

示例体验：http://fe.cardniu.work/calf-ui/example/#/

##### 使用

1.对话框提供 【默认/次要】两种形式的对话框；

2.对话框组件提供

##### 代码片段

```html
<template>
  <div class="page-dialog">
    <calf-button @click="handleClick1">触发默认弹窗</calf-button>
    <calf-button @click="handleClick2">触发主弹窗</calf-button>
    <calf-button @click="handleClick3">单按钮1</calf-button>
    <calf-button @click="handleClick4">单按钮2</calf-button>
    <calf-button @click="handleClick5">自定义弹窗</calf-button>
    <calf-dialog v-model="dialogVisible" type="default" :showClose="true">
      <img src="../assets/img/icon-loan-success.png" class="dialog-img">
      <p class="dialog-desc">亲，完成后就能马上拿钱了哦~</p>
    </calf-dialog>
  </div>
</template>
```

```javascript
<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClick1() {
      this.$createDialog({
        type: 'default',
        title: '弹窗标题',
        content: '银行预留手机号码用于银行卡进行快捷支付',
        showClose: true,
        cancelBtn: {
          text: '上一步',
          disabled: false
        },
        onConfirm: () => {
          console.log('confirm')
        },
        onCancel: () => {
          console.log('cancel')
        }
      }).show()
    },
    handleClick2() {
      this.$createDialog({
        type: 'primary',
        content: '银行预留手机号码用于银行卡进行快捷支付时进行身份验证。',
        confirmBtn: {
          text: '我知道了'
        }
      }).show()
    },
    handleClick3() {
      this.$createDialog({
        type: 'default',
        content: '银行预留手机号码用于银行卡进行快捷支付时进行身份验证。',
        onlyOneBtn: true,
        confirmBtn: {
          text: '我知道了'
        }
      }).show()
    },
    handleClick4() {
      this.$createDialog({
        type: 'primary',
        content: '银行预留手机号码用于银行卡进行快捷支付时进行身份验证。',
        onlyOneBtn: true,
        confirmBtn: {
          text: '我知道了'
        }
      }).show()
    },
    handleClick5() {
      this.dialogVisible = true
    }
  }
}
</script>
```

#### API

| 参数       |        说明        |          类型 |                      可选值 |                          默认值 |
| ---------- | :----------------: | ------------: | --------------------------: | ------------------------------: |
| title      |        标题        |        String |                  任意字符串 |                            提示 |
| content    |        内容        |        String |                  任意字符串 |                  未知的系统错误 |
| type       |        类型        |        String |             default/primary |                         default |
| showClose  |    显示关闭按钮    |       Boolean |                  true/false |                           false |
| maskCancle |  点击浮层关闭弹框  |       Boolean |                  true/false |                           false |
| confirmBtn |    确认按钮内容    | Object/String | {text: '', disabled: false} | {text: '确认', disabled: false} |
| cancelBtn  |    取消按钮内容    | Object/String | {text: '', disabled: false} | {text: '取消', disabled: false} |
| onlyOneBtn | 只显示一个确认按钮 |       Boolean |                  true/false |                           false |

#### EVENTS

> 使用`api`调用需要加前缀`on`，比如`onConfirm`，`onCancel`

| 事件    |     说明     | 返回值 |
| ------- | :----------: | ------ |
| confirm | 点击确认按钮 | event  |
| cancel  | 点击取消按钮 | event  |
