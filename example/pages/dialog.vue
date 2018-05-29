<template>
  <div class="page-dialog">
    <calf-button @click="handleClick1">触发默认弹窗</calf-button>
    <calf-button @click="handleClick2">触发主弹窗</calf-button>
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
    handleClick1() {
      this.$createDialog({
        type: 'default',
        content: '456',
        onConfirm: () => {
          console.log('confirm')
        }
      }).show()
    },
    handleClick2() {
      this.$createDialog({
        type: 'primary',
        content: '456',
        onConfirm: () => {
          console.log('confirm')
        }
      }).show()
    }
  }
}
</script>

<style scoped>
.calf-button {
  margin: 10px 0;
}

.page-dialog {
  padding: 20px;
}
</style>
