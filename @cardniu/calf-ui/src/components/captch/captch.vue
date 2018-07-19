<template>
  <transition name="calf-picker-fade">
    <calf-popup type="captch" :center="false" @mask-click="close" v-show="isVisible">
      <div class="calf-captch calf-picker-container" :class="rootClass">
        <div class="captch-title">{{title}}</div>
        <div class="captch-body">
          <div class="captch-header">
            <captch-input
              :captchStatus="captchStatus"
              :currentIndex="currentIndex"
              :codes="codes"
              :mobile="mobile"
              :type="type"
              :duration="duration"
              @on-repeat="onRepeat"/>
          </div>
          <div class="captch-content">
            <captch-panel
              :currentIndex="currentIndex"
              :codes="codes"
              @on-choose="handleChoose"
              @on-delete="handleDelete"
              @on-clear="handleClear"
              v-if="isBeforeVerify"/>
            <div class="captch-loading" v-else-if="isAfterVerify">
              <i class="icon-loading loading-rotation"></i>
            </div>
            <div class="captch-result" v-else-if="isVerifyFail">{{verifyFailMessage}}</div>
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

const EVENT_CANCEL = 'cancel'
const EVENT_CHANGE = 'change'
const EVENT_CONFIRM = 'confirm'
const EVENT_SUCCESS = 'success'
const EVENT_FAIL = 'fail'
const EVENT_REPEAT_SENT = 'repeat'

const VERIFY_FAIL_MESSAGE = '验证码错误，2s后重新输入'

export default {
  name: COMPONENT_NAME,
  mixins: [visibilityMixin],
  data() {
    return {
      codes: ['', '', '', '', '', ''],
      allCodes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      afterVerify: false,
      afterLoading: false,
      captchStatus: 0
    }
  },
  props: {
    mobile: {
      type: String,
      default: '***********'
    },
    type: {
      type: String,
      default: 'verify'
    },
    title: {
      type: String,
      default() {
        return this.type === 'verify' ? '请输入手机验证码' : '请输入交易密码'
      }
    },
    duration: {
      type: Number,
      default: 60
    },
    confirmCaptch: {
      type: Function,
      default: () => {
        return Promise.resolve()
      }
    },
    verifyFailMessage: {
      type: String,
      default: VERIFY_FAIL_MESSAGE
    }
  },
  computed: {
    rootClass() {
      return `calf-captch-${this.type}`
    },
    isBeforeVerify() {
      return this.captchStatus === BEFORE_VERIFY_STATUS
    },
    isAfterVerify() {
      return this.captchStatus === AFTER_VERIFY_STATUS
    },
    isVerifyFail() {
      return this.captchStatus === VERIFY_FAIL_STATUS
    },
    currentIndex() {
      let currentIndex = 0
      this.codes.forEach((code, index) => {
        let prev = this.codes[index - 1]
        let hasCompletePrev = this.allCodes.indexOf(prev) > -1
        let hasCompleteCurrent = this.allCodes.indexOf(code) > -1
        if (index === 0 && !hasCompleteCurrent) {
          currentIndex = index
        } else if (hasCompletePrev && !hasCompleteCurrent) {
          currentIndex = index
        } else if (index === this.codes.length - 1 && hasCompleteCurrent) {
          currentIndex = this.codes.length
        }
      })
      return currentIndex
    },
    clearCode() {
      return this.codes.join('')
    }
  },
  watch: {
    isVerifyFail(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.captchStatus = BEFORE_VERIFY_STATUS
          this.handleClear()
        }, 2 * 1000)
      }
    },
    codes(newVal) {
      this.$emit(EVENT_CHANGE, this.clearCode)
    }
  },
  methods: {
    handleClear() {
      this.codes = this.codes.map(item => {
        return ''
      })
    },
    onRepeat() {
      this.$emit(EVENT_REPEAT_SENT)
    },
    close() {
      this.captchStatus = BEFORE_VERIFY_STATUS
      this.$emit(EVENT_CANCEL, this.clearCode)
      this.hide()
    },
    handleChoose(number) {
      if (this.currentIndex <= this.codes.length - 1) {
        this.codes.splice(this.currentIndex, 1, number)
      }
      if (this.currentIndex === this.codes.length) {
        this.captchStatus = AFTER_VERIFY_STATUS
        this.handleConfirm()
      }
    },
    handleConfirm() {
      this.$emit(EVENT_CONFIRM, this.clearCode)
      this.confirmCaptch(this.clearCode)
        .then(res => {
          this.$emit(EVENT_SUCCESS, this.clearCode, res)
          this.handleClear()
          this.close()
        })
        .catch(res => {
          this.$emit(EVENT_FAIL, this.clearCode, res)
          this.captchStatus = VERIFY_FAIL_STATUS
        })
    },
    handleDelete() {
      if (this.currentIndex > 0) {
        this.codes.splice(this.currentIndex - 1, 1, '')
      }
    }
  },
  components: {
    CalfPopup,
    CaptchInput,
    CaptchPanel
  },
  mounted() {
    console.log(this.$vnode)
  }
}
</script>

<style lang="postcss" scoped>
@import "../../common/style/variable.css";
@import "../../common/style/animation.css";

$verify-body-padding-top: 20px;
$captch-body-padding-top: 18px;
$captch-content-padding-top: 28px;
$captch-loading-width: 34px;
$captch-loading-margin-left: -17px;
$captch-loading-top: 77px;

.calf-captch {
  width: 100%;
  height: auto;
  border-radius: $captch-radius;
  background: $color-bg-white;
  .captch-title {
    width: 100%;
    height: $captch-title-width;
    line-height: $captch-title-width;
    font-size: $fontsize-large;
    color: $color-grey-dark-ss;
    text-align: center;
    border-radius: $captch-radius;
    border-bottom: $captch-title-border;
  }
  .captch-body {
    width: 100%;
    height: auto;
  }
}

.calf-captch-verify .captch-body .captch-header {
  padding-top: $verify-body-padding-top;
}

.calf-captch-password .captch-body .captch-header {
  padding-top: $captch-body-padding-top;
}

.captch-body {
  .captch-content {
    box-sizing: border-box;
    width: 100%;
    height: $captch-content-height;
    padding-top: $captch-content-padding-top;
    .captch-loading {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      .icon-loading {
        display: block;
        position: absolute;
        left: 50%;
        top: $captch-loading-top;
        margin-left: $captch-loading-margin-left;
        width: $captch-loading-width;
        height: $captch-loading-width;
        background: url("../../common/icon/calfic-loading-grey.png");
        background-size: 100% 100%;
      }
    }
    .captch-result {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: $captch-title-width;
      line-height: $captch-title-width;
      font-size: $fontsize-small;
      color: $color-bg-white;
      text-align: center;
      background: $color-red-warn;
    }
  }
}
</style>
