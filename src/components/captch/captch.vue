<template>
  <transition name="calf-captch-fade">
  <calf-popup type="captch" @mask-click="handleMaskClick" v-show="isVisible">
      <div class="calf-captch">
        <div class="captch-title">请输入手机验证码</div>
        <div class="captch-body">
          <captch-input
            :captchStatus="captchStatus"
            :currentIndex="currentIndex"
            :codes="codes"
            @on-repeat="onRepeat"/>
          <div class="captch-content">
            <captch-panel
              :currentIndex="currentIndex"
              :codes="codes"
              @on-choose="handleChooseNumber"
              @on-delete="handleDelete"
              @on-clear="onClear"
              v-if="isBeforeVerify"/>
            <div class="captch-loading" v-else-if="isAfterVerify">
              <i class="icon-loading"></i>
            </div>
            <div class="captch-result" v-else-if="isVerifyFail">验证码错误，2s后重新输入</div>
          </div>
        </div>
      </div>
  </calf-popup>
 </transition>
</template>

<script>
import visibilityMixin from '../../common/mixins/visibility'
import CalfPopup from '../popup/popup'
import CaptchInput from './captch-input'
import CaptchPanel from './captch-panel.vue'

const COMPONENT_NAME = 'calf-captch'
const BEFORE_VERIFY_STATUS = 0
const AFTER_VERIFY_STATUS = 10
const VERIFY_FAIL_STATUS = 20

export default {
  name: COMPONENT_NAME,
  mixins: [visibilityMixin],
  data() {
    return {
      currentIndex: 0,
      codes: ['', '', '', '', '', ''],
      allCodes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      afterVerify: false,
      afterLoading: false,
      captchStatus: 0
    }
  },
  props: {},
  computed: {
    isBeforeVerify() {
      return this.captchStatus === BEFORE_VERIFY_STATUS
    },
    isAfterVerify() {
      return this.captchStatus === AFTER_VERIFY_STATUS
    },
    isVerifyFail() {
      return this.captchStatus === VERIFY_FAIL_STATUS
    }
  },
  watch: {
    isVerifyFail(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.captchStatus = BEFORE_VERIFY_STATUS
          this.onClear()
        }, 2 * 1000)
      }
    }
  },
  methods: {
    onClear() {
      this.codes = this.codes.map(item => {
        return ''
      })
      this.updateCurrentIndex()
    },
    onRepeat() {
      this.$emit('on-repeat')
    },
    updateCurrentIndex() {
      let hadFindCurrentIndex = false
      this.codes.forEach((code, index) => {
        let prev = this.codes[index - 1]
        let hasCompletePrev = this.allCodes.indexOf(prev) > -1
        let hasCompleteCurrent = this.allCodes.indexOf(code) > -1
        if (index === 0 && !hasCompleteCurrent) {
          this.currentIndex = index
        } else if (hasCompletePrev && !hasCompleteCurrent) {
          this.currentIndex = index
        } else if (index === this.codes.length - 1 && hasCompleteCurrent) {
          this.currentIndex = this.codes.length
        }
      })
    },
    handleMaskClick() {
      this.hide()
    },
    handleChooseNumber(number) {
      if (this.currentIndex <= this.codes.length - 1) {
        this.codes.splice(this.currentIndex, 1, number)
        this.updateCurrentIndex()
      }
      if (this.currentIndex === this.codes.length) {
        this.captchStatus = AFTER_VERIFY_STATUS
        setTimeout(() => {
          this.captchStatus = VERIFY_FAIL_STATUS
        }, 1000)
      }
    },
    handleDelete() {
      if (this.currentIndex > 0) {
        this.codes.splice(this.currentIndex - 1, 1, '')
        this.updateCurrentIndex()
      }
    }
  },
  components: {
    CalfPopup,
    CaptchInput,
    CaptchPanel
  },
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.calf-captch {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
  background: #ffffff;
  .captch-title {
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    color: #333333;
    text-align: center;
    border-radius: 8px 8px 6px 6px;
    border-bottom: 1px solid #f1f1f1;
  }
  .captch-body {
    width: 100%;
    height: auto;
  }
}

.captch-body {
  .captch-content {
    width: 100%;
    height: 280px;
    .captch-loading {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      .icon-loading {
        display: block;
        position: absolute;
        left: 50%;
        top: 105px;
        margin-left: -17px;
        width: 34px;
        height: 34px;
        background: resolve('calfic-tick.png');
        background-size: 100% 100%;
      }
    }
    .captch-result {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 44px;
      line-height: 44px;
      font-size: 12px;
      color: #ffffff;
      text-align: center;
      background: #ff4a31;
    }
  }
}

.calf-captch-fade-enter-active {
  animation: captch-fadein 0.3s;
  .calf-captch {
    animation: captch-slide-in 0.3s;
  }
}

.calf-captch-fade-leave-active {
  animation: captch-fadeout 0.3s;
  .calf-captch {
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
