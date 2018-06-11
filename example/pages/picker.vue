<template>
 <div class="page-picker">
   <calf-button
    @click="handlePicker1">单列</calf-button>
  <calf-button
    @click="handlePicker2">多列</calf-button>
  <calf-button
    @click="handlePicker3">级联</calf-button>
  <calf-button
    @click="handlePicker4">日期</calf-button>
 </div>
</template>

<script>
import { cascadeData } from '../data/cascade.js'
import { data1, data2, data3 } from '../data/picker'

export default {
  name: 'page-picker',
  data() {
    return {
      pickerVisible: false
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    initPicker() {
      this.picker1 = this.$createPicker({
        title: '单列内容',
        data: [data1],
        onSelect: this.selectHandle,
        onChange: this.onChange
      })
      this.picker2 = this.$createPicker({
        title: '多列内容',
        data: [data1, data2, data3],
        onSelect: this.selectHandle
      })
      this.picker3 = this.$createCascadePicker({
        title: '级联内容',
        data: cascadeData,
        onSelect: this.selectHandle
      })
      this.picker4 = this.$createDatePicker({
        title: '日期',
        min: new Date(2008, 7, 8),
        max: new Date(2020, 9, 20),
        value: new Date(),
        format: {
          year: 'YYYY年',
          month: 'MM月',
          date: '第 D 日'
        },
        onSelect: this.selectDateHandle
      })
    },
    handlePicker1() {
      this.picker1.show()
    },
    handlePicker2() {
      this.picker2.show()
    },
    handlePicker3() {
      this.picker3.show()
    },
    handlePicker4() {
      this.picker4.show()
    },
    onChange(current, index) {
      console.log(current, index, data1[index])
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        content: `Selected Item: <br/>  value: ${selectedVal.join(
          ', '
        )} <br/>  index: ${selectedIndex.join(
          ', '
        )} <br/>  text: ${selectedText.join(' ')}`
      }).show()
    },
    selectDateHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        content: `Selected Item: <br/>  value: ${selectedVal} <br/>  index: ${selectedIndex.join(
          ', '
        )} <br/>  text: ${selectedText.join(' ')}`
      }).show()
    },
    cancelHandle() {}
  },
  components: {},
  mounted() {
    this.initPicker()
  }
}
</script>

<style lang="postcss" scoped>
.page-picker {
  padding: 20px;
  .calf-button {
    margin: 10px 0;
  }
}
</style>
