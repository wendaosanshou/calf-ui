<template>
  <div class="page-button">
    <calf-button>按钮</calf-button>
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
      // this.$createPopup({
      //   onMaskClick: function() {
      //     console.log('onMaskClick')
      //   }
      // }).show()
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
  .calf-btn {
    margin: 10px 0;
  }
}
</style>
