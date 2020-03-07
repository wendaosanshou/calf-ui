<template>
 <div class="captch-input">
    <div class="captch-title-wrap" v-if="isVerifyCode">
      <h4 class="captch-input-title">已向 {{maskMobile}} 发送验证短信</h4>
      <p class="captch-input-desc" v-if="!afterTimeout">{{count}}s后重新获取</p>
      <p class="captch-repeat" v-else @click="handleRepeat">重新获取</p>
    </div>
    <ul class="captch-input-list" :class="{'is-verify-fail': isVerifyFail}">
      <li class="captch-input-item" :class="{'current': index === currentIndex}" v-for="(item, index) in codes" :key="index">{{item}}</li>
    </ul>
    <p class="captch-forget" @click="handleForget" v-if="isPassword">忘记密码</p>
 </div>
</template>

<script>
const BEFORE_VERIFY_STATUS = 0
const AFTER_VERIFY_STATUS = 10
const VERIFY_FAIL_STATUS = 20
const EVENT_REPEAT = 'on-repeat'
const EVENT_FORGET = 'on-forget'

export default {
  name: 'captch-input',
  data() {
    return {
      count: this.duration,
      tid: '',
      afterTimeout: false
    }
  },
  props: {
    captchStatus: {
      type: Number,
      default: 0
    },
    codes: {
      type: Array,
      defaul() {
        return []
      }
    },
    currentIndex: {
      type: Number,
      default: 0
    },
    mobile: {
      type: String,
      default: '***********'
    },
    type: {
      type: String,
      default: 'verify'
    },
    duration: {
      type: Number,
      default: 60
    }
  },
  computed: {
    isVerifyFail() {
      return this.captchStatus === VERIFY_FAIL_STATUS
    },
    maskMobile() {
      return `${this.mobile.slice(0, 3)}****${this.mobile.slice(7, 11)}`
    },
    isVerifyCode() {
      return this.type === 'verify'
    },
    isPassword() {
      return this.type === 'password'
    }
  },
  methods: {
    handleRepeat() {
      this.initTimeInterval()
      this.$emit(EVENT_REPEAT)
    },
    handleForget() {
      this.$emit(EVENT_FORGET)
    },
    initTimeInterval() {
      this.afterTimeout = false
      this.tid = setInterval(() => {
        if (this.count > 1) {
          this.count--
        } else {
          this.count = this.duration
          clearInterval(this.tid)
          this.afterTimeout = true
        }
      }, 1 * 1000)
    }
  },
  mounted() {
    this.initTimeInterval()
  }
}
</script>

<style lang="postcss" src="../../style/captch-input.css"></style>
