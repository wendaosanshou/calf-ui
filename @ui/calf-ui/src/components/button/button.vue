<template>
  <button
    class="calf-button"
    :class="btnClass"
    @click="handleClick">
    <div v-if="$slots.content && $slots.desc">
      <div class="calf-button-content">
        <slot name="content"></slot>
      </div>
      <div class="calf-button-desc">
        <slot name="desc"></slot>
      </div>
    </div>
    <slot v-else></slot>
  </button>
</template>

<script>
const COMPONENT_NAME = 'calf-button'
export default {
  name: COMPONENT_NAME,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    inlineConfirm: {
      type: Boolean,
      default: false
    },
    inlineCancel: {
      type: Boolean,
      default: false
    },
    invalid: {
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
        'calf-button-disabled': this.disabled,
        'calf-button-invalid': this.invalid,
        'calf-button-inline-confirm': this.inlineConfirm,
        'calf-button-inline-cancel': this.inlineCancel
      }
    }
  },
  methods: {
    handleClick(event) {
      if (this.disabled || this.invalid) {
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

.calf-button-content {
  font-size: 16px;
  color: #ffffff;
  line-height: 24px;
}
.calf-button-desc {
  font-size: 11px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.7);
}
.calf-button {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 44px;
  line-height: 44px;
  color: #ffffff;
  font-size: 17px;
  letter-spacing: 0;
  text-align: center;
  background: linear-gradient(-270deg, #ff9155 0%, #fe7336 100%);
  box-shadow: 0 3px 10px 0 rgba(255, 146, 80, 0.5);
  border-radius: 4px;
  outline: none;
  border: none;
  border-radius: 4px;
  &:active {
    opacity: 0.8;
  }
  &.calf-button-disabled {
    opacity: 0.5;
    &:active {
      opacity: 0.5;
    }
  }
  &.calf-button-invalid {
    background: #cccccc;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.5);
    &:active {
      opacity: 1;
      background: #cccccc;
      box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.5);
    }
  }
  &.calf-button-inline-confirm {
    display: inline-block;
    width: 120px;
    height: 32px;
    line-height: 24px;
    font-size: 16px;
    color: #ffffff;
    vertical-align: middle;
  }
  &.calf-button-inline-cancel {
    display: inline-block;
    width: 120px;
    height: 32px;
    line-height: 24px;
    font-size: 16px;
    color: #f95c06;
    background: #ffffff;
    border: 1px solid #f95c06;
    box-shadow: 0 0 0 0 #fff;
    vertical-align: middle;
  }
}
</style>
