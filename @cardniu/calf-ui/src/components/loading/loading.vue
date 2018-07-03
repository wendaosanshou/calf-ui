<template>
  <transition name="calf-toast-fade">
    <calf-popup
      type="loading"
      v-show="isVisible">
      <div class="calf-loading">
        <div class="loading-content" :class="bgClass" v-if="!text">
          <i class="calfic-loading loading-image loading-rotation"></i>
        </div>
        <div class="loading-content loading-bg-text"  v-else>
          <i class="calfic-loading loading-image loading-rotation"></i>
          <div class="loading-text" v-html="text"></div>
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
    text: {
       type: String,
       default: ''
    },
    bg: {
      type: String,
      default: ''
    }
  },
  computed: {
    bgClass() {
      return `loading-bg-${this.bg}`
    }
  },
  methods: {
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
  height: auto;
  height: 76px;
  transform: translate(-50%, -50%);
  background: $loading-content-bgc;
  border-radius: $loading-content-radius;
}
.loading-bg-white{
  background: #fff;
  .calfic-loading {
    display: block;
    background: resolve('calfic-loading-grey.png');
    background-size: 100% 100%;
  }
}
.loading-bg-text{
   @include flex(column, center, center);
}
.loading-text{
  line-height: 20px;
  font-size: 10px;
}
.loading-image {
  display: block;
  width: 28px;
  height: 28px;
}
</style>
