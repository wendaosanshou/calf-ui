<template>
  <div class="dialog-view">
    <calf-button @click="handleClick">触发</calf-button>
    <calf-dialog v-model="visible">123123</calf-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    handleClick() {
      console.log('click')
      this.visible = true
    }
  }
}
</script>

<style scoped>
.dialog-view {
  padding: 20px;
}
</style>
