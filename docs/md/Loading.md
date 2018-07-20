
### Loading
***

?>加载圈

##### 引入

```javascript
import { Loading } from 'calf-ui'
Vue.component(Loading)
```

##### 例子

示例体验：http://www.calf-ui.com/#/loading

##### 使用

1.默认样式
```js
  this.$createLoading().show()
```

2.白色底的

```js
  this.$createLoading({
      bg: 'white'
   }).show() 
```

3.带文字的

```js
   this.$createLoading({
        text: '加载中...'
   }).show()
```

4.关闭加载圈

```js
   this.$createLoading().hide()
```

#### API

| 参数        |   说明   |     类型 | 可选值 | 默认值 |
| ----------- | :------: | -------: | -----: | -----: |
| bg          | loading背景 |  String  | "white"  | ""  |
| text        | loading文字 |  String  |  自定义   | "" |

