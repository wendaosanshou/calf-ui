<template>
  <button
    class="calf-btn"
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
        'calf-btn-active': this.active,
        'calf-btn-disabled': this.disabled,
        'calf-btn-inline': this.inline,
        'calf-btn-primary': this.primary,
        'calf-btn-outline': this.outline,
        'calf-btn-outline-primary': this.outline && this.primary,
        'calf-btn-light': this.light
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

.calf-btn {
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
  &.calf-btn-disabled {
    opacity: 0.5;
    &:active {
      opacity: 0.5;
    }
  }
  &.calf-btn-inline {
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
