<template>
  <div class="calf-popup" :style="{'z-index': zIndex}" :class="[rootClass, centerClass]" v-show="isVisible">
    <div class="calf-popup-mask" @click="handleMask"></div>
    <div class="calf-popup-container">
      <div class="calf-popup-content" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="calf-popup-content" v-else v-html="content">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import visibilityMixin from '../../common/mixins/visibility'
const COMPONENT_NAME = 'calf-popup'
const EVENT_MASK_CLICK = 'mask-click'

export default {
  name: COMPONENT_NAME,
  mixins: [visibilityMixin],
  props: {
    animation: {
      type: String,
      default: 'picker'
    },
    type: {
      type: String,
      default: 'popup'
    },
    content: {
      type: String,
      default: '未知的系统错误'
    },
    zIndex: {
      type: Number,
      default: 100
    },
    center: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    rootClass() {
      return `calf-popup-${this.type}`
    },
    centerClass() {
      return this.center ? 'calf-popup-center' : 'calf-popup-bottom'
    }
  },
  methods: {
    handleMask(e) {
      this.$emit(EVENT_MASK_CLICK, e)
    }
  }
}
</script>

<style lang="postcss" src="../../style/popup.css"></style>
