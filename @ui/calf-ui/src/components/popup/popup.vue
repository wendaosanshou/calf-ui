<template>
  <div class="calf-popup" :style="{'z-index': zIndex}" :class="[rootClass, centerClass]" v-show="isVisible">
    <div class="calf-popup-mask" @click="handleMask"></div>
    <div class="calf-popup-container">
      <div class="calf-popup-content" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="calf-popup-content" v-else v-html="content">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import visibilityMixin from '../../common/mixins/visibility'
const COMPONENT_NAME = 'calf-popup'
const EVENT_MASK_CLICK = 'mask-click'

export default {
  name: COMPONENT_NAME,
  mixins: [visibilityMixin],
  props: {
    animation: {
      type: String,
      default: 'picker'
    },
    type: {
      type: String,
      default: 'popup'
    },
    content: {
      type: String,
      default: '未知的系统错误'
    },
    zIndex: {
      type: Number,
      default: 100
    },
    center: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    rootClass() {
      return `calf-popup-${this.type}`
    },
    centerClass() {
      return this.center ? 'calf-popup-center' : 'calf-popup-bottom'
    }
  },
  methods: {
    handleMask(e) {
      this.$emit(EVENT_MASK_CLICK, e)
    }
  }
}
</script>

<style lang="postcss" scoped>
@import '../../common/style/animation.css';
@import '../../common/style/variable.css';

.calf-popup {
  z-index: 10000;
  .calf-popup-mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: $popup-mask-bgc;
  }
  .calf-popup-content {
    font-size: $popup-content-fontsize;
    color: $popup-content-color;
  }
}

.calf-popup-center {
  .calf-popup-container {
    position: absolute;
    left: 50%;
    top: 50%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
  }
}

.calf-popup-bottom {
  .calf-popup-container {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: auto;
  }
}

.calf-popup-dialog {
  .calf-popup-content {
    padding: 0;
    border-radius: $popup-content-dialog-radius;
  }
}

.calf-popup-toast {
  .calf-popup-content {
    padding: 0;
    border-radius: $popup-content-toast-radius;
  }
}
</style>
