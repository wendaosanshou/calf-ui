<template>
  <div class="calf-loading">
    <calf-icon name="loading" class="loading-image loading-rotation"/>
  </div>
</template>

<script>
import CalfIcon from '../icon/icon.vue'

const COMPONENT_NAME = 'calf-loading'
export default {
  name: COMPONENT_NAME,
  props: {
    type: {
      type: String,
      default: 'spinning-bubbles'
    }
  },
  computed: {},
  components: {
    CalfIcon
  }
}
</script>

<style lang="postcss" scoped>
@import '../../common/style/animation.css';

.loading-image {
  display: block;
  width: 18px;
  height: 18px;
}
</style>
