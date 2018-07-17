
### Captch
***

>验证码组件，主要场景用来校验验证码以及校验密码等场景使用

##### 引入

```javascript
import { Captch } from 'calf-ui'
Vue.component(Captch.name, Captch)
```

##### 例子

示例体验：http://www.calf-ui.com/#/captch

##### 使用

通过调用this.$createCaptch()方法传入对应的参数，提供取消onCancel函数、监听变化onChange函数、确认onConfirm函数、校验成功onSuccess函数、校验失败onFail函数、重新获取onRepeat函数回调 通过show()方法显示

##### 代码片段

```html
  <calf-button @click="handleCaptch">触发验证码</calf-button>
  <calf-button @click="handlePassword">触发密码</calf-button>
```

```javascript
export default {
  name: 'page-captch',
  data() {
    return {
      resultVisible: true
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    confirmCaptch(code) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (code === '123456') {
            resolve()
          } else {
            reject()
          }
        }, 1 * 1000)
      })
    },
    handleChange(code) {
      console.log('onChange:', code)
    },
    handleCancel(code) {
      console.log('onCancel:', code)
    },
    handleCaptch() {
      this.$createCaptch({
        title: '测试一下',
        mobile: '18612345678',
        type: 'verify',
        duration: 5,
        status: this.captchStatus,
        confirmCaptch: this.confirmCaptch,
        onCancel: () => {
          console.log('onCancel')
        },
        onChange: code => {
          console.log('onChange:', code)
        },
        onConfirm: code => {
          console.log('onConfirm:', code)
        },
        onSuccess: code => {
          console.log('onSuccess:', code)
        },
        onFail: code => {
          console.log('onFail:', code)
        },
        onRepeat: () => {
          console.log('onRepeat')
        }
      }).show()
    },
    handlePassword() {
      this.$createCaptch({
        type: 'password',
        confirmCaptch: this.confirmCaptch
      }).show()
    }
  },
  components: {},
  mounted() {}
}
```

#### API

| 参数 | 说明 | 类型 | 可选值 | 默认值
| - | :-: | -: | -: | -: |
| mobile  | 手机号| String | | ***********
| type  | 类型 | String | verify password| 默认为verify 手机验证码
| title  | 弹出框标题| String | | type传入值为verify默认值则为请输入手机验证码,其他请输入交易密码
| duration  | 倒计时时长单位秒| Number | | 60
| confirmCaptch  | 确认框| Function | | Promise.resolve()

#### Slot

暂无
