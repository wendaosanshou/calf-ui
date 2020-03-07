<template>
  <div class="calf-switch">
    <input class="calf-switch-input" type="checkbox" v-model="checkboxValue" :disabled="disabled">
    <i class="calf-switch-ui"></i>
    <span class="calf-switch-label"><slot></slot></span>
  </div>
</template>

<script type="text/ecmascript-6">
const COMPONENT_NAME = 'calf-switch'

const EVENT_CHANGE = 'change'

export default {
  name: COMPONENT_NAME,
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checkboxValue: this.value
    }
  },
  watch: {
    value(newVal) {
      this.checkboxValue = newVal
    },
    checkboxValue(newVal) {
      this.$emit(EVENT_CHANGE, newVal)
    }
  }
}
</script>

<style lang="postcss" src="../../style/switch.css"></style>
