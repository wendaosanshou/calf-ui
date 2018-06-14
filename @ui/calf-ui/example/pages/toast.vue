<template>
 <div class="page-toast">
   <calf-button @click="handleClick1">toast（一行）</calf-button>
   <calf-button @click="handleClick2">toast（多行）</calf-button>
   <calf-button @click="handleClick3">toast（3s后隐藏）</calf-button>
   <calf-button @click="handleClick4">toast（带图标）</calf-button>
 </div>
</template>

<script>
export default {
  name: 'page-toast',
  data() {
    return {}
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    handleClick1() {
      this.$createToast({
        content: '借款金额不能超过100万'
      }).show()
    },
    handleClick2() {
      this.$createToast({
        content: '银行预留手机号码用于银行卡进行快捷'
      }).show()
    },
    handleClick3() {
      this.$createToast({
        duration: 3 * 1000,
        content: '银行预留手机号码用于银行卡进行快捷',
        onClose: () => {
          console.log('close')
        }
      }).show()
    },
    handleClick4() {
      this.$createToast({
        duration: 3 * 1000,
        // icon: 'tick-red',
        icon: 'error-red',
        content: '加载中...',
        onClose: () => {
          console.log('close')
        }
      }).show()
    }
  },
  components: {},
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.page-toast {
  padding: 20px;
}

.calf-button {
  margin: 10px 0;
}
</style>
