<template>
  <transition name="calf-fade">
    <div class="calf-notice" :class="rootClass" v-show="value" @click="handleArrowToogle">
      <i class="calf-icon-broadcast" :class="iconBroadcastClass" v-show="showIcon"></i>
      <p class="calf-notice-content" ref="content">{{content}}</p>
      <i class="calf-icon-close" :class="iconCloseClass" @click="handleClose" v-show="showClose"></i>
      <i class="calf-icon-arrow" :class="iconArrowClass" v-show="showArrow"></i>
    </div>
  </transition>
</template>

<script>
const COMPONENT_NAME = 'calf-notice'
const EVENT_CLOSE = 'on-close'
const EVENT_ARROW_TOOGLE = 'on-toogle'
const DEF_ICON = 'notice-orange'
const DEF_CONTENT = '未知的错误提示'
const DEF_TYPE = 'info'

export default {
  name: COMPONENT_NAME,
  data() {
    return {}
  },
  props: {
    type: {
      type: String,
      default: DEF_TYPE
    },
    value: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: DEF_ICON
    },
    content: {
      type: String,
      default: DEF_CONTENT
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: false
    },
    showArrow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    rootClass() {
      return `calf-notice-${this.type}`
    },
    iconBroadcastClass() {
      return `icon-broadcast-${this.type}`
    },
    iconCloseClass() {
      return `icon-close-${this.type}`
    },
    iconArrowClass() {
      return `icon-arrow-${this.type}`
    }
  },
  methods: {
    handleClose(event) {
      event.preventDefault()
      event.stopPropagation()
      this.$emit('input', false)
      this.$emit(EVENT_CLOSE, event)
    },
    handleArrowToogle(event) {
      this.$emit(EVENT_ARROW_TOOGLE, event)
    }
  }
}
</script>

<style lang="postcss" src="../../style/notice.css"></style>
