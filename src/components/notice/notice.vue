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

<style lang="postcss" scoped>
@import '../../common/style/variable.css';
@import '../../common/style/mixin.css';
@import '../../common/style/animation.css';

.calf-notice {
  @include flex(row, flex-start, center);
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 40px;
  padding: 0 16px;
  &.calf-notice-info {
    color: $notice-info-color;
    background: $notice-info-bgc;
    .calf-notice-content {
      color: $notice-info-color;
    }
  }
  &.calf-notice-warning {
    color: $notice-warning-color;
    background: $notice-warning-bgc;
    .calf-notice-content {
      color: $notice-warning-color;
    }
  }
  &.calf-notice-error {
    color: $notice-error-color;
    background: $notice-error-bgc;
    .calf-notice-content {
      color: $notice-error-color;
    }
  }
  .calf-icon-broadcast {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    &.icon-broadcast-info {
      background: url('../../common/icon/calfic-notice-gray.png');
      background-size: 100% 100%;
    }
    &.icon-broadcast-warning {
      background: url('../../common/icon/calfic-notice-orange.png');
      background-size: 100% 100%;
    }
    &.icon-broadcast-error {
      background: url('../../common/icon/calfic-notice-red.png');
      background-size: 100% 100%;
    }
  }
  .calf-notice-content {
    font-size: 14px;
    line-height: 20px;
    padding: 10px 0;
  }
  .calf-icon-close,
  .calf-icon-arrow {
    @include flex(row, center, center);
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
      background: url('../../common/icon/calfic-close-gray.png');
      background-size: 100% 100%;
    }
    &.icon-close-warning:after {
      background: url('../../common/icon/calfic-close-orange.png');
      background-size: 100% 100%;
    }
    &.icon-close-error:after {
      background: url('../../common/icon/calfic-close-red.png');
      background-size: 100% 100%;
    }
    &.icon-arrow-info:after {
      background: url('../../common/icon/calfic-right-gray.png');
      background-size: 100% 100%;
    }
    &.icon-arrow-warning:after {
      background: url('../../common/icon/calfic-right-orange.png');
      background-size: 100% 100%;
    }
    &.icon-arrow-error:after {
      background: url('../../common/icon/calfic-right-red.png');
      background-size: 100% 100%;
    }
  }
}
</style>
