<template>
  <transition name="calf-toast-fade">
    <calf-popup
      type="loading"
      v-show="isVisible">
      <div class="calf-loading">
        <div class="loading-content">
          <i class="calfic-loading loading-image loading-rotation"></i>
        </div>
      </div>
    </calf-popup>
  </transition>
</template>

<script>
import visibilityMixin from '../../common/mixins/visibility'
const COMPONENT_NAME = 'calf-loading'
const EVENT_CLOSE = 'close'

export default {
  name: COMPONENT_NAME,
  mixins: [visibilityMixin],
  data() {
    return {}
  },
  props: {
    duration: {
      type: Number,
      default: 1 * 1000
    }
  },
  watch: {
    isVisible(newVal) {
      if (newVal) {
        this.initLoadingDuration()
      }
    }
  },
  methods: {
    initLoadingDuration() {
      setTimeout(() => {
        this.$emit(EVENT_CLOSE)
        this.hide()
      }, this.duration)
    }
  }
}
</script>

<style lang="postcss" scoped>
@import '../../common/style/variable.css';
@import '../../common/style/mixin.css';
@import '../../common/style/animation.css';
@import '../../common/style/calf-icon.css';

.calf-loading {
  position: fixed;
  width: 100%;
  height: 100%;
}

.loading-content {
  @include flex(row, center, center);
  position: fixed;
  left: 50%;
  top: 50%;
  width: 76px;
  height: 76px;
  transform: translate(-50%, -50%);
  background: $loading-content-bgc;
  border-radius: $loading-content-radius;
}
.loading-image {
  display: block;
  width: 28px;
  height: 28px;
}
</style>
