<template>
  <button
    class="calf-button"
    :type="type"
    :class="btnClass"
    @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
const COMPONENT_NAME = 'calf-button'
export default {
  name: COMPONENT_NAME,
  props: {
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    btnClass() {
      return {
        'calf-button-active': this.active,
        'calf-button-disabled': this.disabled,
        'calf-button-inline': this.inline,
        'calf-button-primary': this.primary,
        'calf-button-outline': this.outline,
        'calf-button-outline-primary': this.outline && this.primary,
        'calf-button-light': this.light
      }
    }
  },
  methods: {
    handleClick(event) {
      if (this.disabled) {
        event.preventDefault()
        event.stopPropagation()
        return
      }
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="postcss" scoped>
@import '../../common/style/base.css';

.calf-button {
  box-sizing: border-box;
  display: block;
  padding: 17px 16px;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  color: #fff;
  background: linear-gradient(-270deg, #ff9155 0%, #fe7336 100%);
  outline: none;
  border: none;
  border-radius: 2px;
  &.calf-button-disabled {
    opacity: 0.5;
    &:active {
      opacity: 0.5;
    }
  }
  &.calf-button-inline {
    width: auto;
    display: inline-block;
    vertical-align: middle;
    padding: 9px 10px;
    font-size: 12px;
  }
  &:active {
    opacity: 0.9;
  }
}
</style>
