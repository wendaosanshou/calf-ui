### PullRefresh

---

?>上拉下拉，提供下拉刷新，上拉加载。

##### 引入

```javascript
// 全局引入
import 'calf-ui/style.css'
import Calf from 'calf-ui'
Vue.use(Calf)

// 局部引入
import { PullRefresh } from 'calf-ui/pull-refresh'
Vue.use(PullRefresh)
```

##### 例子

示例体验：http://123.206.17.49/docs/example//#/

![二维码](http://123.206.17.49/docs/assets/example-qrcode.png)

##### 使用

支持下拉刷新，上拉加载

```html
<div class="page-pull-refresh">
  <h1 class="title">title</h1>
  <div class="content">
    <calf-pull-refresh
      :distanceIndex="2"
      :wrapperHeight="wrapperHeight"

      :top-load-method="handRefresh"
      @top-state-change="handTopStateChange"
      @top-pull="handTopPull"

      :bottom-load-method="handLoadMore"
      @bottom-state-change="handBottomStateChange"
      @bottom-pull="handBottomPull"

      @infinite-scroll="handNativeScroll"
      >
      <!--
        <div slot="top-block" class="top-block"></div>
        -->
      <ul class="list">
        <li class="item" v-for="(item, index) in num" :ref="index" :key="index">{{item}}</li>
      </ul>
      <!--
        <div slot="bottom-block" class="bottom-block"></div>
        -->
    </calf-pull-refresh>
  </div>
</div>
```

```javascript
export default {
  data() {
    return {
      wrapperHeight: '0px',
      num: 15
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    handRefresh(loaded) {
      // loaded 是组件暴露出来的一个内部函数
      // ajax完成后，手动触发loaded，并传入状态即可改变top-block展示，组件中默认了'done'
      setTimeout(() => {
        loaded('done')
      }, 1000)
    },
    handTopPull(dis) {
      // dis 下拉的位移量 单位px 是一个 >0 的数字 初始值0
      console.log(dis)
    },
    handTopStateChange(state) {
      // state 组件中定义了 pull trigger loading loaded-done 四种状态
      // 这里可以根据状态控制自己定义的top-block展示
      console.log(state)
    },

    handLoadMore(loaded) {
      // 同下拉刷新
      setTimeout(() => {
        this.num += 5
        loaded('done')
      }, 1000)
    },
    handBottomStateChange(state) {
      // 同下拉刷新
      console.log(state)
    },
    handBottomPull(dis) {
      // dis 上拉的位移量 单位px 是一个 <0 的数字 初始值0
      console.log(dis)
    },

    handNativeScroll() {
      // 没有任何参数
    }
  },
  mounted() {
    // wrapperHeight 是组件外层容器的高度 默认值 100% 传入 px
    // 这里如果列表很长，需要手动计算高度赋值进去，不然会导致无法正常滑动
    this.wrapperHeight =
      document.querySelector('.page-pull-refresh').clientHeight -
      document.querySelector('.title').clientHeight +
      'px'
  }
}
```

#### Props

|         参数         |         说明          |   类型   |    可选值     | 默认值 |                                 备注                                  |
| :------------------: | :-------------------: | :------: | :-----------: | :----: | :-------------------------------------------------------------------: |
|    distanceIndex     |     滑动阻尼系数      |  Number  |      >0       |   2    | 手指滑动 10px 则滑动区域位移 (10/2) px 系数越大，位移量越小，反之亦然 |
|  isThrottleTopPull   |     开启下拉节流      | Boolean  | true or false |  true  |          组件中设置了 200ms 触发一次，第一次延迟 300ms 触发           |
| isThrottleBottomPull |     开启上拉节流      | Boolean  | true or false |  true  |          组件中设置了 200ms 触发一次，第一次延迟 300ms 触发           |
|   isThrottleScroll   |     开启滚动节流      | Boolean  | true or false |  true  |          组件中设置了 100ms 触发一次，第一次延迟 150ms 触发           |
|     isTopBounce      |     开启下拉回弹      | Boolean  | true or false |  true  |                          关闭就失去下拉效果                           |
|    isBottomBounce    |     开启上拉回弹      | Boolean  | true or false |  true  |                          关闭就失去上拉效果                           |
|    topBlockHeight    | 下拉 loading 区域高度 |  Number  |      >0       |   40   |                                   -                                   |
|  bottomBlockHeight   | 上拉 loading 区域高度 |  Number  |      >0       |   40   |                                   -                                   |
|    wrapperHeight     |    外层容器的高度     |  String  |       -       |  100%  |                        长列表需要手动计算高度                         |
|    topLoadMethod     |     下拉刷新事件      | Function |       -       |   -    |      有 cb，执行 cb 并传入 state 可控制 loading 状态，具体见例子      |
|   bottomLoadMethod   |     上拉刷新事件      | Function |       -       |   -    |      有 cb，执行 cb 并传入 state 可控制 loading 状态，具体见例子      |
|   bottomLoadMethod   |     上拉刷新事件      | Function |       -       |   -    |      有 cb，执行 cb 并传入 state 可控制 loading 状态，具体见例子      |
|      topConfig       |       顶部配置        |  Object  |     见下      |   -    |                                   -                                   |
|     bottomConfig     |       底部配置        |  Object  |     见下      |   -    |                                   -                                   |

#### topConfig、bottomConfig

|      参数       |          说明          |  类型  | 可选值 |    默认值    |             备注              |
| :-------------: | :--------------------: | :----: | :----: | :----------: | :---------------------------: |
|    pullText     |      拉动过程文案      | String |   -    | 下拉即可刷新 |               -               |
|   triggerText   |     拉动临界点文案     | String |   -    | 释放即可刷新 |               -               |
|   loadingText   |       加载中文案       | String |   -    |  加载中...   |               -               |
|    doneText     |      加载完成文案      | String |   -    |   加载完成   |               -               |
|    failText     |      加载失败文案      | String |   -    |   加载失败   |               -               |
| loadedStayTime  | 加载完成后动画持续时间 | Number |   -    |     400      |    加载完后动画僵持 400ms     |
|  stayDistance   |  加载过程中位移的距离  | Number |   -    |      40      | 最好和对应的 BlockHeight 一致 |
| triggerDistance |     拉动临界点距离     | Number |   -    |      70      |         看设计喜好 😭         |

#### @Events

```javascript
@top-state-change="handStateChange"
@bottom-state-change="handStateChange"
/**
 * @param {string} state pull的状态
*/
handStateChange(state) {
  // state 四种状态
  // pull 拖动
  // trigger 到达临界距离
  // loading 加载
  // loaded-done 加载完成
}

@top-pull="handPull"
@bottom-pull="handPull"
/**
 * @param {number} distance 位移距离
*/
handPull(distance) {
  // distance
  // top-pull 的时候 >0
  // bottom-pull 的时候 <0
}

@infinite-scroll="handNativeScroll"
handNativeScroll() {
  // 基本没用...
}
```

#### Slot

| 参数         |                                    说明                                     |
| ------------ | :-------------------------------------------------------------------------: |
| top-block    |  下拉刷新的 loading 区域，如果使用须指定 topBlockHeight，避免无法正常展示   |
| bottom-block | 上拉加载的 loading 区域，如果使用须指定 bottomBlockHeight，避免无法正常展示 |
