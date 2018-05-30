<template>
  <calf-popup type="toast" @mask-click="handleMaskClick" v-show="isVisible">
    <div class="calf-toast" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="calf-toast" v-else>
      {{content}}
    </div>
  </calf-popup>
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
    duration: {
      type: Number,
      default: 0
    },
    content: {
      type: String,
      default: '未知的系统错误'
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
  components: {},
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.calf-toast {
  box-sizing: border-box;
  width: auto;
  max-width: 270px;
  font-size: 14px;
  color: #ffffff;
  padding: 8px 16px;
  line-height: 21px;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}
</style>
