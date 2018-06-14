<template>
  <transition name="calf-notice-fade">
    <div class="calf-notice" :class="rootClass" v-show="value" @click="handleArrowToogle">
      <i class="calf-icon-broadcast" :class="iconBroadcastClass" v-show="showIcon"></i>
      <p class="calf-notice-content" ref="content">{{content}}</p>
      <i class="calf-icon-close" :class="iconCloseClass" @click="handleClose" v-show="showClose"></i>
      <i class="calf-icon-arrow" :class="iconArrowClass" v-show="showArrow"></i>
    </div>
  </transition>
</template>

<script>
import ClafIcon from '../icon/icon'

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
  },
  components: {
    ClafIcon
  },
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.calf-notice {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 16px;
  &.calf-notice-info {
    color: #666666;
    background: #ffffff;
    .calf-notice-content {
      color: #666666;
    }
  }
  &.calf-notice-warning {
    color: #f69917;
    background: rgba(246, 153, 23, 0.1);
    .calf-notice-content {
      color: #f69917;
    }
  }
  &.calf-notice-error {
    color: #f95c06;
    background: rgba(249, 92, 6, 0.1);
    .calf-notice-content {
      color: #f95c06;
    }
  }
  .calf-icon-broadcast {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    &.icon-broadcast-info {
      background: resolve('calfic-notice-gray.png');
      background-size: 100% 100%;
    }
    &.icon-broadcast-warning {
      background: resolve('calfic-notice-orange.png');
      background-size: 100% 100%;
    }
    &.icon-broadcast-error {
      background: resolve('calfic-notice-red.png');
      background-size: 100% 100%;
    }
  }
  .calf-notice-content {
    font-size: 13px;
    line-height: 20px;
    color: #f69917;
    padding: 10px 0;
  }
  .calf-icon-close,
  .calf-icon-arrow {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    &:after {
      width: 12px;
      height: 12px;
      content: '';
    }
    &.icon-close-info:after {
      background: resolve('calfic-close-gray.png');
      background-size: 100% 100%;
    }
    &.icon-close-warning:after {
      background: resolve('calfic-close-orange.png');
      background-size: 100% 100%;
    }
    &.icon-close-error:after {
      background: resolve('calfic-close-red.png');
      background-size: 100% 100%;
    }
    &.icon-arrow-info:after {
      background: resolve('calfic-right-gray.png');
      background-size: 100% 100%;
    }
    &.icon-arrow-warning:after {
      background: resolve('calfic-right-orange.png');
      background-size: 100% 100%;
    }
    &.icon-arrow-error:after {
      background: resolve('calfic-right-red.png');
      background-size: 100% 100%;
    }
  }
}

.calf-notice-fade-enter-active {
  animation: notice-in 0.2s;
}
.calf-notice-fade-leave-active {
  animation: notice-out 0.2s;
}

@keyframes notice-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes notice-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
