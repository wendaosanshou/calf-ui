### Tab

---

?>tab 栏切换组件。

##### 引入

```javascript
import { Tab } from 'calf-ui'
Vue.component(Tab)
```

##### 例子

示例体验：http://123.206.17.49/docs/example//#/

![二维码](https://raw.githubusercontent.com/wendaosanshou/calf-ui/master/docs/assets/example-qrcode.png)

##### 使用

1.tab 栏个数动态配置栏目切换、配置数组数据生成对应 tab 个数

##### 代码片段

```html
   <calf-tab :tabs="tabs1" :selectTab="0"></calf-tab>
   <calf-tab :tabs="tabs2" :selectTab="0" lineWidth="40px" @select="handleSelect"></calf-tab>
```

```javascript
export default {
  name: 'page-tab',
  data() {
    return {
      tabs1: ['极速推荐', '其他贷款'],
      tabs2: ['极速推荐', '热门贷款', '其他贷款'],
      selectTab: 1
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    handleSelect(item, index) {
      console.log(`item: ${item}, index: ${index}`)
    }
  },
  components: {}
}
```

#### API

| 参数      |        说明        |    类型 |     可选值 | 默认值 |
| --------- | :----------------: | ------: | ---------: | -----: |
| selectTab |     tab 高亮值     |  number |            |      0 |
| lineWidth |      tab 宽度      |  string |            |  104px |
| showLine  | 是否显示底部高亮线 | booleal | true/false |   true |

#### EVENTS

| 事件   |     说明     | 返回值      |
| ------ | :----------: | ----------- |
| select | 点击确认按钮 | value,index |
