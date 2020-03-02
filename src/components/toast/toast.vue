<template>
  <transition name="calf-toast-fade">
    <calf-popup type="toast" @mask-click="handleMaskClick" v-show="isVisible">
      <div class="calf-toast" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="calf-toast" v-else>
        <i class="calf-toast-icon" :class="iconClass" v-if="icon" name="desc"></i>
        {{content}}
      </div>
    </calf-popup>
  </transition>
</template>

<script>
import visibilityMixin from '../../common/mixins/visibility'
import CalfPopup from '../popup/popup'

const COMPONENT_NAME = 'calf-toast'
const EVENT_MASK_CLICK = 'mask-click'
const EVENT_TOAST_CLOSE = 'close'

export default {
  name: COMPONENT_NAME,
  mixins: [visibilityMixin],
  data() {
    return {
      durationId: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'toast'
    },
    duration: {
      type: Number,
      default: 0
    },
    content: {
      type: String,
      default: '未知的系统错误'
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconClass() {
      return `calfic-${this.icon}`
    }
  },
  watch: {
    isVisible(newVal, oldVal) {
      if (newVal && this.duration > 0) {
        this.initDurationEvent()
      }
    }
  },
  methods: {
    close() {
      this.$emit(EVENT_TOAST_CLOSE)
      clearTimeout(this.durationId)
      this.hide()
    },
    handleMaskClick() {
      this.$emit(EVENT_MASK_CLICK)
      this.close()
    },
    initDurationEvent() {
      this.durationId = setTimeout(() => {
        this.close()
      }, this.duration)
    }
  },
  components: {
    CalfPopup
  },
  mounted() {}
}
</script>

<style lang="postcss" scoped>
@import '../../common/style/variable.css';
@import '../../common/style/animation.css';
@import '../../common/style/mixin.css';
@import '../../common/style/calf-icon.css';

.calf-toast {
  box-sizing: border-box;
  @include flex(column, flex-start, center);
  width: auto;
  max-width: 270px;
  height: auto;
  font-size: $toast-fontsize;
  color: $toast-color;
  padding: 8px 16px;
  line-height: $toast-lineheight;
  text-align: center;
  background: $toast-bgc;
  border-radius: $toast-radius;
  .calf-toast-icon {
    width: 28px;
    height: 28px;
    margin-bottom: 8px;
  }
}
</style>
