<template>
 <img :src="target" :class="rootClass" class="icon" @click="handleClick"/>
</template>

<script>
const EVENT_CLICK = 'click'
export default {
  name: 'base-icon',
  data() {
    return {}
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    rootClass() {
      return `calfic-${this.calfic}`
    },
    target() {
      return require(`../../common/icon/calfic-${this.name}.png`)
    }
  },
  methods: {
    handleClick() {
      this.$emit(EVENT_CLICK)
    }
  }
}
</script>

<style lang="postcss" scoped>
.base-icon {
}
</style>
