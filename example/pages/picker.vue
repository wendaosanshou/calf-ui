<template>
 <div class="page-picker">
   <calf-button
    @click="handlePicker1">单列</calf-button>
  <calf-button
    @click="handlePicker2">多列</calf-button>
 </div>
</template>

<script>
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
    handlePicker1() {
      this.$createPicker({
        title: '单列内容',
        data: [data1],
        onSelect: this.selectHandle,
        onChange: this.onChange
      }).show()
    },
    handlePicker2() {
      this.$createPicker({
        title: '多列内容',
        data: [data1, data2, data3],
        onSelect: this.selectHandle
      }).show()
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
    cancelHandle() {}
  },
  components: {},
  mounted() {}
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
