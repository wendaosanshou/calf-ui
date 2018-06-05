<template>
 <div class="captch-input">
    <h4 class="captch-input-title">已向 151****9302 发送验证短信</h4>
    <p class="captch-input-desc" v-if="!afterTimeout">{{count}}s后重新获取</p>
    <p class="captch-repeat" v-else @click="handleRepeat">重新获取</p>
    <ul class="captch-input-list" :class="{'is-verify-fail': isVerifyFail}">
      <li class="captch-input-item" :class="{'current': index === currentIndex}" v-for="(item, index) in codes" :key="index">{{item}}</li>
    </ul>
 </div>
</template>

<script>
const BEFORE_VERIFY_STATUS = 0
const AFTER_VERIFY_STATUS = 10
const VERIFY_FAIL_STATUS = 20

export default {
  name: 'captch-input',
  data() {
    return {
      count: 60,
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
    }
  },
  computed: {
    isVerifyFail() {
      return this.captchStatus === VERIFY_FAIL_STATUS
    }
  },
  watch: {},
  methods: {
    handleRepeat() {
      this.afterTimeout = false
      this.$emit('on-repeat')
    },
    initTimeInterval() {
      this.afterTimeout = false
      this.tid = setInterval(() => {
        if (this.count > 1) {
          this.count--
        } else {
          this.count = 60
          clearInterval(this.tid)
          this.afterTimeout = true
        }
      }, 1 * 1000)
    }
  },
  components: {},
  mounted() {
    this.initTimeInterval()
  }
}
</script>

<style lang="postcss" scoped>
.captch-input {
  padding-top: 20px;
  .captch-input-title {
    font-size: 14px;
    color: #666666;
    text-align: center;
    line-height: 16px;
    margin-bottom: 8px;
  }
  .captch-input-desc {
    font-size: 12px;
    color: #cccccc;
    text-align: center;
    line-height: 16px;
  }
  .captch-repeat {
    font-size: 12px;
    color: #f95c06;
    text-align: center;
    line-height: 16px;
  }
  .captch-input-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-top: 8px;
    &.is-verify-fail .captch-input-item {
      color: #ff4a31;
    }
    .captch-input-item {
      width: 36px;
      height: 45px;
      font-size: 32px;
      color: #333333;
      text-align: center;
      border-bottom: 1px solid #cccccc;
      margin-left: 12px;
      &.current {
        border-bottom: 1px solid #666666;
      }
    }
  }
}
</style>
