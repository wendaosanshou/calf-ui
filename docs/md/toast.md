### Toast

---

> 轻提示组件，主要场景用来一些轻度文案提示，提供自定义类型、自定显示内容、自定义图标、自定义显示时间等

##### 引入

```javascript
import { Toast } from 'calf-ui'
Vue.use(Toast)
```

##### 例子

示例体验：http://123.206.17.49/docs/example//#/

![二维码](http://123.206.17.49/docs/assets/example-qrcode.png)

##### 使用

基本使用通过调用 this.$createToast()函数传入对应参数调用 show()。

##### 代码片段

```html
 <div class="page-toast">
   <calf-button @click="handleClick1">toast（一行）</calf-button>
   <calf-button @click="handleClick2">toast（多行）</calf-button>
   <calf-button @click="handleClick3">toast（3s后隐藏）</calf-button>
   <calf-button @click="handleClick4">toast（带图标）</calf-button>
 </div>
```

```javascript
export default {
  name: 'page-toast',
  data() {
    return {}
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    handleClick1() {
      this.$createToast({
        content: '借款金额不能超过100万'
      }).show()
    },
    handleClick2() {
      this.$createToast({
        content: '银行预留手机号码用于银行卡进行快捷'
      }).show()
    },
    handleClick3() {
      this.$createToast({
        duration: 3 * 1000,
        content: '银行预留手机号码用于银行卡进行快捷',
        onClose: () => {
          console.log('close')
        }
      }).show()
    },
    handleClick4() {
      this.$createToast({
        duration: 3 * 1000,
        // icon: 'tick-red',
        icon: 'close',
        content: '加载中...',
        onClose: () => {
          console.log('close')
        }
      }).show()
    }
  },
  components: {},
  mounted() {}
}
```

#### API

| 参数     |   说明   |   类型 | 可选值 |         默认值 |
| -------- | :------: | -----: | -----: | -------------: |
| type     |   类型   | String |        |          toast |
| duration | 显示时长 | Number |        |              0 |
| content  | 显示内容 | String |        | 未知的系统错误 |
| icon     |   图标   | String |        |       默认为空 |

#### Slot

| 参数    |   说明   |
| ------- | :------: |
| content | 显示内容 |
