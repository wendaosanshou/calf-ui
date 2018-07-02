### Switch

---

?>在两种状态间切换时用到的开关选择器。

##### 引入

```javascript
// 全局引入
import Calf from 'calf-ui'
Vue.use(Calf)

// 局部引入
import 'calf-ui/switch/style.css'
import Switch from 'calf-ui/switch'
Vue.use(Switch)
```

##### 例子

示例体验：http://www.calf-ui.com/#/switch

##### 代码片段

```html
<template>
  <calf-switch v-model="values" @change="handleChange"/>
</template>
```

```javascript
<script>
export default {
  name: 'page-switch',
  data() {
    return {
      values: false
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    }
  },
  mounted() {}
}
</script>
```

#### API

| 参数     |                      说明                       |    类型 |     可选值 | 默认值 |
| -------- | :---------------------------------------------: | ------: | ---------: | -----: |
| value    | 指定当前是否选中，可以使用 v-model 双向绑定数据 | Boolean | true/false |   提示 |
| disabled |                    禁用开关                     | Boolean | true/false |   提示 |

#### EVENTS

| 事件   |          说明          | 返回值     |
| ------ | :--------------------: | ---------- |
| change | 点击 switch 时触发事件 | true/false |
