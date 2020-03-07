<template>
  <transition name="calf-toast-fade">
    <calf-popup
      type="loading"
      v-show="isVisible">
      <div class="calf-loading">
        <div class="loading-content" :class="bgClass" v-if="!text">
          <i class="calfic-loading loading-image loading-rotation"></i>
        </div>
        <div class="loading-content loading-bg-text"  v-else>
          <i class="calfic-loading loading-image loading-rotation"></i>
          <div class="loading-text" v-html="text"></div>
        </div>
      </div>
    </calf-popup>
  </transition>
</template>

<script>
import visibilityMixin from '../../common/mixins/visibility'
const COMPONENT_NAME = 'calf-loading'
const EVENT_CLOSE = 'close'

export default {
  name: COMPONENT_NAME,
  mixins: [visibilityMixin],
  data() {
    return {}
  },
  props: {
    text: {
       type: String,
       default: ''
    },
    bg: {
      type: String,
      default: ''
    }
  },
  computed: {
    bgClass() {
      return `loading-bg-${this.bg}`
    }
  },
  methods: {
  }
}
</script>

<style lang="postcss" src="../../style/loading.css"></style>
