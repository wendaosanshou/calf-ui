<template>
  <transition name="calf-toast-fade">
    <calf-popup type="toast" @mask-click="handleMaskClick" v-show="isVisible">
      <div class="calf-toast" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="calf-toast" v-else>
        <claf-icon
          class="calf-toast-icon"
          v-if="icon"
          :name="icon"/>
        {{content}}
      </div>
    </calf-popup>
  </transition>
</template>

<script>
import visibilityMixin from '../../common/mixins/visibility'
import ClafIcon from '../icon/icon'
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
  computed: {},
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
    CalfPopup,
    ClafIcon
  },
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.calf-toast {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  max-width: 270px;
  height: auto;
  font-size: 14px;
  color: #ffffff;
  padding: 8px 16px;
  line-height: 21px;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  .calf-toast-icon {
    width: 28px;
    height: 28px;
    margin-bottom: 8px;
  }
}

.calf-toast-fade-enter-active {
  animation: toast-in 0.2s;
}
.calf-toast-fade-leave-active {
  animation: toast-out 0.2s;
}

@keyframes toast-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes toast-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
