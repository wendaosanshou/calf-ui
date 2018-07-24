### Progress

---

?>进度条/步骤条

##### 引入

```javascript
import { Progress } from 'calf-ui'
Vue.component(Progress.name, Progress)
```

##### 例子

示例体验：http://fe.cardniu.work/calf-ui/example/#/

##### 使用

进度条提供三种类型类型

1.默认样式

```html
<calf-progress :current="current1" :steps="progress1"></calf-progress>
```

```js
export default {
  data() {
    return {
      current1: 1,
      progress1: ['芝麻认证', '运营商认证', '基本信息', '实名认证'],
    }
  },
```

2.横向步骤条

```html
<calf-progress :current="current2" :steps="progress2" type="line"></calf-progress>
```

```js
export default {
  data() {
    return {
      current2: 1,
      progress2: ['芝麻认证', '运营商认证', '基本信息', '实名认证'],
    }
  },
```

3.竖向步骤条

```html
<calf-progress :current="current3" :steps="progress3" type="label"></calf-progress>
```

```js
export default {
  data() {
    return {
      current3: 1,
      progress3: [
        {
          title: '填写申请资料',
          desc: '填写基本信息视频认证',
          label: '2017/08/28 19:36:18'
        },
        {
          title: '填写申请资料',
          desc: '填写基本信息视频认证',
          label: '2017/08/28 19:36:18'
        },
        {
          title: '填写申请资料',
          desc: '填写基本信息视频认证',
          label: '2017/08/28 19:36:18'
        }
      ]
    }
  },
```

#### API

| 参数     |              说明              |    类型 | 可选值 |    默认值 |
| -------- | :----------------------------: | ------: | -----: | --------: |
| current  |            当前步骤            |  Number |        |         0 |
| steps    | 对象数组，配置每一步显示的标题 |   Array |        |      [''] |
| type     |            样式类型            |  String |        | "default" |
| isFinish |         icon 状态切换          | Boolean |        |     false |
