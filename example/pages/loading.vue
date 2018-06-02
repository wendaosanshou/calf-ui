<template>
  <div class="page-loading">
    <calf-button @click="handleLoading">toogle</calf-button>
    <calf-loading v-model="showLoading"/>
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
      this.showLoading = true
    }
  }
}
</script>

<style lang="postcss" scoped>
.page-loading {
  padding: 20px;
}
</style>
