<template>
 <div class="page-picker">
   <calf-button @click="handlePicker1">按钮</calf-button>
 </div>
</template>

<script>
import { data1 } from '../data/picker'
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
        title: 'Picker',
        data: [...data1],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      }).show()
    },
    selectHandle() {},
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
