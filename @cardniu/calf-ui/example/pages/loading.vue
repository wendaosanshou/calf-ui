<template>
  <div class="page-loading">
    <calf-button @click="handleLoading">默认的</calf-button>
    <calf-button @click="handleLoading1">白色底</calf-button>
    <calf-button @click="handleLoading2">带文字的</calf-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created () {
  },
  methods: {
    handleLoading() {
      this.$createLoading().show()
      setTimeout(() => {
        this.$createLoading().hide()
      }, 3000)
    },
    handleLoading1() {
      this.$createLoading({
        bg: 'white'
      }).show()
      setTimeout(() => {
        this.$createLoading().hide()
      }, 3000)
    },
    handleLoading2() {
      this.$createLoading({
        text: '加载中...'
      }).show()
      setTimeout(() => {
        this.$createLoading().hide()
      }, 3000)
    }
  }
}
</script>

<style lang="postcss" scoped>
.page-loading {
  padding: 20px;
  background: #f5f5f5;
  min-height: 100vh;
}
.calf-button {
  margin: 10px 0;
}
</style>
