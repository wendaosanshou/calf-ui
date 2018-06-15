<template>
 <div class="calf-tab">
   <ul class="calf-tab-list" ref="tabList">
     <li class="calf-tab-item"
      :class="{'active': selectTabValue === index}"
      v-for="(item, index) in tabs" :key="index"
      @click="handleClick(index, item.text, $event)">{{item.text}}</li>
   </ul>
   <div class="calf-tab-line" :style="{'left': linePositionLeft, 'width': lineWidth}" ref="line" v-show="showLine"></div>
 </div>
</template>

<script>
const COMPONENT_NAME = 'calf-tab'
const EVENT_SELECT = 'select'

export default {
  name: COMPONENT_NAME,
  data() {
    return {
      selectTabValue: this.selectTab,
      linePositionLeft: 0
    }
  },
  props: {
    tabs: {
      type: Array,
      default: []
    },
    selectTab: {
      type: String | Number,
      default: 0
    },
    lineWidth: {
      type: String,
      default: '108px'
    },
    showLine: {
      type: Boolean,
      default: true
    }
  },
  watch: {},
  methods: {
    getLinePosition() {
      let theItemWidth = this.$refs.tabList.querySelector('.calf-tab-item')
        .clientWidth
      let theLineWidth = this.$refs.line.clientWidth
      let prevTabWidth = this.selectTabValue * theItemWidth
      this.linePositionLeft = `${prevTabWidth +
        (theItemWidth - theLineWidth) / 2}px`
    },
    handleClick(index, text, event) {
      this.selectTabValue = index
      this.$emit(EVENT_SELECT, index, text, event)
      this.getLinePosition()
    }
  },
  components: {},
  mounted() {
    this.$nextTick(res => {
      this.getLinePosition()
    })
  }
}
</script>

<style lang="postcss" scoped>
.calf-tab {
  position: relative;
  width: 100%;
  height: 40px;
  background: #ffffff;
  .calf-tab-list {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 40px;
    .calf-tab-item {
      width: auto;
      height: 40px;
      flex: 1;
      font-size: 14px;
      color: #333333;
      text-align: center;
      line-height: 40px;
      &.active {
        color: #f95c06;
      }
    }
  }
  .calf-tab-line {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 108px;
    height: 1px;
    transition: all 0.3s;
    background: #f95c06;
  }
}
</style>
