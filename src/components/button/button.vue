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

<style lang="postcss" src="../../style/button.css"></style>
