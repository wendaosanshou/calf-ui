### Notice

---

> 通知组件，主要场景用来放入页面头部通知、警告用户，提供消息，警告，错误三种通知提示，定义通知框左侧图标显示，右侧关闭，箭头图标，关闭回调函数。

##### 引入

```javascript
import { Notice } from 'calf-ui'
Vue.use(Notice)
```

##### 例子

示例体验：http://123.206.17.49/docs/example//#/

![二维码](https://raw.githubusercontent.com/wendaosanshou/calf-ui/master/docs/assets/example-qrcode.png)

##### 使用

基本使用提供消息，警告，错误提示，同时可以定义左侧侧图标显示，右侧关闭，箭头图标的显示，组合使用

##### 代码片段

```html
<div class="page-notice">
  <calf-notice
  type="info"
  content="消息提示的文案"
  v-model="noticeVisible1"
  @on-close="handleNotice1"
  showIcon
  showClose/>
  <calf-notice
  type="warning"
  content="警告提示的文案"
  v-model="noticeVisible2"
  @on-close="handleNotice2"
  showClose/>
  <calf-notice
  type="error"
  content="错误提示的文案"
  v-model="noticeVisible3"
  @on-toogle="handleNotice3"
  showIcon
  showArrow/>
  <calf-notice
  type="error"
  content="为了账户资金安全，需要您参照示例图提供真实资料提交审核。资料仅用于审核，我们将为您严格保密。"
  v-model="noticeVisible4"
  @on-close="handleNotice4"/>
</div>
```

```javascript
export default {
  name: 'page-notice',
  data() {
    return {
      noticeVisible1: true,
      noticeVisible2: true,
      noticeVisible3: true,
      noticeVisible4: true
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    handleNotice1() {
      console.log('close')
    },
    handleNotice2() {
      console.log('close')
    },
    handleNotice3() {
      this.$createToast({
        duration: 1 * 1000,
        content: 'toogle'
      }).show()
    },
    handleNotice4() {
      console.log('close')
    }
  },
  components: {},
  mounted() {}
}
```

#### API

| 参数      |       说明       |    类型 | 可选值 |         默认值 |
| --------- | :--------------: | ------: | -----: | -------------: |
| type      |       类型       |  String |        |           info |
| value     |      value       | Boolean |        |          false |
| icon      |       图标       |  String |        |  notice-orange |
| content   |     通知文案     |  String |        | 未知的错误提示 |
| showIcon  |   是否显示图标   | Boolean |        |          false |
| showClose | 是否显示关闭图标 | Boolean |        |          false |
| showArrow |   是否显示箭头   | Boolean |        |          false |

#### Slot

暂无
