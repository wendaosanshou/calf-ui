<template>
  <div class="page-pull-refresh">
    <h1 class="title">title</h1>
    <div class="content">
      <calf-pull-refresh
        ref="index"
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
</template>

<script>
export default {
  name: 'page-pull-refresh',
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
      }, 10 * 1000)
    },
    handTopPull(dis) {
      // dis 下拉的位移量 单位px 是一个 >0 的数字
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
      // dis 上拉的位移量 单位px 是一个 <0 的数字
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
</script>

<style lang="postcss" scoped>
.page-pull-refresh {
  height: 100%;
  .title {
    position: relative;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #f6f6f6;
    z-index: 999;
  }
  .content {
    position: relative;
    z-index: 1;
    .list {
      .item {
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding-left: 16px;
        &:nth-child(2n + 1) {
          background: #f6f6f6;
        }
      }
    }
  }
}
</style>
