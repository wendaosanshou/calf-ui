
### Tab
***

?>tab栏切换组件。

##### 引入

```javascript
import { Tab } from 'calf-ui'
Vue.component(Tab)
```

##### 例子

示例体验：http://www.calf-ui.com/#/tab


##### 使用
1.tab栏个数动态配置栏目切换、配置数组数据生成对应tab个数


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

| 参数 | 说明 | 类型 | 可选值 | 默认值
| - | :-: | -: | -: | -: | 
| selectTab| tab高亮值| number| | |
| lineWidth| tab宽度| string| | |
| select| 触发回调| function | | | |


#### 事件
`select` 事件

select 回调事件提供了、`item`  `index`两个返回值、即某个 `tab`以及对应的索引


#### Slot


