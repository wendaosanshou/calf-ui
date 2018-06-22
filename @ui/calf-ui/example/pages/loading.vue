<template>
  <div class="page-loading">
    <calf-button @click="handleLoading">toogle</calf-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLoading: false
    }
  },
  methods: {
    handleLoading() {
      this.$createLoading({
        duration: 3 * 1000,
        onClose: () => {
          console.log('close')
        }
      }).show()
    }
  }
}
</script>

<style lang="postcss" scoped>
.page-loading {
  padding: 20px;
}
</style>
