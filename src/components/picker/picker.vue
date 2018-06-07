<template>
  <transition name="calf-picker-fade">
    <calf-popup
      type="picker"
      :center="false"
      v-show="isVisible"
      @touchmove.prevent
      @mask-click="cancel">
      <div class="calf-picker">
        <div class="calf-picker-header">
          <i class="calf-icon"></i>
          <span class="calf-title">借款金额</span>
          <span class="calf-label">下一步</span>
        </div>

        <div class="calf-picker-content">
          <i class="top-mask"></i>
          <i class="bottom-mask"></i>
          <div class="calf-picker-wraper" ref="wraper">
            <ul class="calf-picker-list">
              <li class="calf-picker-item" v-for="(item, key) in pickerData" :key="key">
                {{item.text}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </calf-popup>
  </transition>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import calfPopup from '../popup/popup.vue'
import visibilityMixin from '../../common/mixins/visibility'

const COMPONENT_NAME = 'calf-picker'

export default {
  name: COMPONENT_NAME,
  mixins: [visibilityMixin],
  props: {
    pending: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: '',
      pickerData: this.data.slice()
    }
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    cancel() {
      this.hide()
    },
    initBetterScroll() {
      let scroll = new BScroll(this.$refs.wraper)
      scroll.on('scrollEnd', () => {
        console.log(scroll.getSelectedIndex())
      })
    }
  },
  components: {
    calfPopup
  },
  created() {
    this.$nextTick(() => {
      this.initBetterScroll()
    })
  }
}
</script>

<style lang="postcss">
.calf-picker {
  width: 100%;
  height: 284px;
  background: #ffffff;
  .calf-picker-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 44px;
    border-radius: 8px 8px 6px 6px;
    border-bottom: 1px solid #f1f1f1;
    .calf-icon {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;
      &:after {
        display: block;
        content: '';
        width: 12px;
        height: 12px;
        background: resolve('calfic-close-gray.png');
        background-size: 100% 100%;
      }
    }
    .calf-title {
      width: auto;
      height: 44px;
      line-height: 44px;
      font-size: 16px;
      color: #333333;
      text-align: center;
    }
    .calf-label {
      width: auto;
      height: 44px;
      line-height: 44px;
      font-size: 16px;
      color: #f95c06;
      padding-right: 16px;
    }
  }
  .calf-picker-content {
    position: relative;
    width: 100%;
    height: 240px;
    i {
      position: absolute;
      left: 0;
      width: 100%;
      height: 96px;
      pointer-events: none;
    }
    .top-mask {
      top: 0;
      z-index: 10;
      border-bottom: 1px solid #f1f1f1;
      background: linear-gradient(
        to top,
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.8)
      );
    }
    .bottom-mask {
      bottom: 0;
      border-top: 1px solid #f1f1f1;
      background: linear-gradient(
        to top,
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.8)
      );
    }
    .calf-picker-wraper {
      position: relative;
      width: 100%;
      height: 240px;
      overflow: auto;
    }
    .calf-picker-list {
      width: 100%;
      height: auto;
      .calf-picker-item {
        width: 100%;
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 15px;
        color: #333333;
        text-align: center;
      }
    }
  }
}

.calf-picker-fade-enter-active {
  animation: captch-fadein 0.3s;
  .calf-picker {
    animation: captch-slide-in 0.3s;
  }
}

.calf-picker-fade-leave-active {
  animation: captch-fadeout 0.3s;
  .calf-picker {
    animation: captch-slide-out 0.3s;
  }
}

@keyframes captch-fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes captch-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes captch-slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}

@keyframes captch-slide-in {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
