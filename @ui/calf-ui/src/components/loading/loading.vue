<template>
  <div class="calf-loading" v-show="value">
    <div class="loading-content">
      <calf-icon name="button-loading" class="loading-image loading-rotation"/>
    </div>
  </div>
</template>

<script>
import CalfIcon from '../icon/icon.vue'
import CalfToast from '../toast/toast.vue'

const COMPONENT_NAME = 'calf-loading'
export default {
  name: COMPONENT_NAME,
  data() {
    return {}
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'spinning-bubbles'
    }
  },
  computed: {},
  components: {
    CalfIcon
  }
}
</script>

<style lang="postcss" scoped>
@import '../../common/style/animation.css';

.calf-loading {
  position: fixed;
  width: 100%;
  height: 100%;
}

.loading-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  width: 76px;
  height: 76px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}
.loading-image {
  display: block;
  width: 28px;
  height: 28px;
}
</style>
