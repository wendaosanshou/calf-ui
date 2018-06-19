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
    <!-- <slot v-else></slot> -->
    <div class="calf-button-icon-container" v-else>
      <img :src="iconTarget" class="calf-button-icon" :class="{'loading-rotation': this.icon === 'loading'}" v-if="iconTarget">
      <slot></slot>
    </div>
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
    inline: {
      type: Boolean,
      default: false
    },
    invalid: {
      type: Boolean,
      default: false
    },
    minor: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconTarget() {
      let icons = ['loading', 'success']
      if (icons.indexOf(this.icon) > -1) {
        return require(`../../common/icon/calfic-button-${this.icon}.png`)
      }
      return ''
    },
    hasBoxShadow() {
      return !(this.inline || this.invalid || this.minor)
    },
    btnClass() {
      return {
        'calf-button-disabled': this.disabled,
        'calf-button-invalid': this.invalid,
        'calf-button-inline': this.inline,
        'calf-button-minor': this.minor,
        'has-box-shadow': this.hasBoxShadow
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

$btn-radius: 4px;
$btn-opacity-active: 0.8;
$btn-opacity-disable: 0.5;
$btn-opacity-default: 1;
$btn-desc-color: rgba(255, 255, 255, 0.7);
$btn-bgc: linear-gradient(-270deg, #ff9155 0%, #fe7336 100%);
$btn-box-shadow-content: 0 3px 10px 0 rgba(255, 146, 80, 0.5);

.calf-button-content {
  font-size: $fontsize-large;
  color: $color-bg-white;
  line-height: $lineheight-large;
}
.calf-button-desc {
  font-size: $fontsize-small-s;
  line-height: $lineheight-small-s;
  color: $btn-desc-color;
}
.calf-button {
  box-sizing: border-box;
  display: block;
  width: $btn-width;
  height: $btn-height;
  line-height: $btn-height;
  color: $color-bg-white;
  font-size: $fontsize-large;
  text-align: center;
  background: $btn-bgc;
  border-radius: $btn-radius;
  &.has-box-shadow {
    box-shadow: $btn-box-shadow-content;
  }
  &:active {
    opacity: $btn-opacity-active;
  }
  &.calf-button-disabled {
    opacity: $btn-opacity-disable;
  }
  &.calf-button-minor {
    color: $btn-minor-color;
    border: 1px solid $btn-minor-color;
    background: $color-bg-white;
    border-radius: $btn-minor-radius;
    &.calf-button-invalid {
      color: $color-grey;
      border: 1px solid $color-grey;
      background: $color-bg-white;
      &:active {
        opacity: $btn-opacity-default;
      }
    }
  }
  &.calf-button-invalid {
    background: $color-grey;
    &:active {
      opacity: $btn-opacity-default;
    }
  }
  &.calf-button-inline {
    display: inline-block;
    width: $btn-inline-width;
    height: $btn-inline-height;
    line-height: $btn-inline-height;
  }
  .calf-button-icon-container {
    @include flex(row, center, center);
    .calf-button-icon {
      width: $btn-icon-width;
      height: $btn-icon-width;
      margin-right: $btn-icon-margin-right;
    }
  }
}
</style>
