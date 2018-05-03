<template>
  <div class="calf-popup" v-show="value">
    <div class="calf-popup-mask" @click="handleMask"></div>
    <div class="calf-popup-container">
      <div class="calf-popup-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
const COMPONENT_NAME = 'calf-popup'
const EVENT_MASK_CLICK = 'mask-click'

export default {
  name: COMPONENT_NAME,
  props: {
    type: {
      type: String,
      default: 'popup'
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleMask(e) {
      this.$emit(EVENT_MASK_CLICK, e)
    }
  }
}
</script>

<style lang="postcss" scoped>
.calf-popup {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  &-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(51, 51, 51, 0.6);
  }
  &-container {
    position: absolute;
    left: 50%;
    top: 50%;
    width: auto;
    transform: translate(-50%, -50%);
  }
  &-content {
    font-size: 14px;
    color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.8);
  }
}
</style>
