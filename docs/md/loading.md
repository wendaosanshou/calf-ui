### Loading

---

?>加载圈

##### 引入

```javascript
import { Loading } from 'calf-ui'
Vue.component(Loading)
```

##### 例子

示例体验：http://123.206.17.49/docs/example//#/

![二维码](https://raw.githubusercontent.com/wendaosanshou/calf-ui/master/docs/assets/example-qrcode.png)

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

| 参数 |     说明     |   类型 |  可选值 | 默认值 |
| ---- | :----------: | -----: | ------: | -----: |
| bg   | loading 背景 | String | "white" |     "" |
| text | loading 文字 | String |  自定义 |     "" |
