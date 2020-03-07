<template>
 <div class="calf-tab">
   <ul class="calf-tab-list" ref="tabList">
     <li class="calf-tab-item"
      :class="{'active': selectTabIndex === index}"
      v-for="(item, index) in tabs" :key="index"
      @click="handleClick(item, index, $event)">{{item}}</li>
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
      selectTabIndex: this.selectTab,
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
  methods: {
    getLinePosition() {
      let theItemWidth = this.$refs.tabList.querySelector('.calf-tab-item')
        .clientWidth
      let theLineWidth = this.$refs.line.clientWidth
      let prevTabWidth = this.selectTabIndex * theItemWidth
      this.linePositionLeft = `${prevTabWidth +
        (theItemWidth - theLineWidth) / 2}px`
    },
    handleClick(item, index, event) {
      this.selectTabIndex = index
      this.$emit(EVENT_SELECT, item, index, event)
      this.getLinePosition()
    }
  },
  mounted() {
    this.$nextTick(res => {
      this.getLinePosition()
    })
  }
}
</script>

<style lang="postcss" src="../../style/tab.css"></style>
