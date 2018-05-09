<template>
  <img :src="target" class="loading-image" />
</template>

<script>
const COMPONENT_NAME = 'calf-loading'
export default {
  name: COMPONENT_NAME,
  props: {
    type: {
      type: String,
      default: 'spinning-bubbles'
    }
  },
  computed: {
    target() {
      return require(`./assets/loading-${this.type}.svg`)
    }
  }
}
</script>

<style lang="postcss" scoped>
.loading-image {
  display: block;
  width: 50px;
  height: 50px;
}

image {
  fill: #fdc646;
}
</style>
