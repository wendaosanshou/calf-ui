<template>
  <div class="page-button">
    <calf-button :active="true">按钮</calf-button>
    <calf-button :disabled="true">按钮</calf-button>
    <calf-button :inline="true">按钮</calf-button>
    <calf-button @click="handleClick">按钮</calf-button>
    <calf-button @click="handleBack">返回</calf-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$createDialog({
        content: '456',
        onConfirm: () => {
          console.log('confirm')
        }
      }).show()
    },
    handleBack() {
      history.go(-1)
    }
  }
}
</script>

<style lang="postcss" scoped>
.page-button {
  padding: 20px;
  .calf-button {
    margin: 10px 0;
  }
}
</style>
