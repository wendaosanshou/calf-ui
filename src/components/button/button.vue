<template>
  <button
    class="calf-btn"
    :type="type"
    :class="btnClass"
    @click="handleClick">
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
const COMPONENT_NAME = 'calf-button'
export default {
  name: COMPONENT_NAME,
  props: {
    icon: {
      type: String,
      default: ''
    },
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

<style lang="postcss">

</style>
