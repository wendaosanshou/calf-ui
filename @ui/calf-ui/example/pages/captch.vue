<template>
 <div class="page-captch">
   <calf-button @click="handleCaptch">触发验证码</calf-button>
   <calf-button @click="handlePassword">触发密码</calf-button>
   <!-- <transition name="calf-picker-fade">
    <calf-popup :center="false" v-model="resultVisible">
      <div class="calf-captch calf-picker-container">
        123
      </div>
    </calf-popup>
   </transition> -->
 </div>
</template>

<script>
export default {
  name: 'page-captch',
  data() {
    return {
      resultVisible: true
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    confirmCaptch(code) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (code === '123456') {
            resolve()
          } else {
            // eslint-disable-next-line
            reject()
          }
        }, 1 * 1000)
      })
    },
    handleChange(code) {
      console.log('onChange:', code)
    },
    handleCancel(code) {
      console.log('onCancel:', code)
    },
    handleCaptch() {
      this.$createCaptch({
        title: '测试一下',
        mobile: '18612345678',
        type: 'verify',
        duration: 120,
        status: this.captchStatus,
        confirmCaptch: this.confirmCaptch,
        onCancel: () => {
          console.log('onCancel')
        },
        onChange: code => {
          console.log('onChange:', code)
        },
        onConfirm: code => {
          console.log('onConfirm:', code)
        },
        onSuccess: code => {
          console.log('onSuccess:', code)
        },
        onFail: code => {
          console.log('onFail:', code)
        }
      }).show()
    },
    handlePassword() {
      this.$createCaptch({
        type: 'password',
        confirmCaptch: this.confirmCaptch
      }).show()
    }
  },
  components: {},
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.page-captch {
  padding: 16px;
}
.calf-button {
  margin: 10px 0;
}
</style>
