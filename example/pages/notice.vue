<template>
 <div class="page-notice">
   <calf-notice
    type="info"
    content="消息提示的文案"
    v-model="noticeVisible1"
    @on-close="handleNotice1"
    showIcon
    showClose/>
   <calf-notice
    type="warning"
    content="警告提示的文案"
    v-model="noticeVisible2"
    @on-close="handleNotice2"
    showClose/>
   <calf-notice
    type="error"
    content="错误提示的文案"
    v-model="noticeVisible3"
    @on-toogle="handleNotice3"
    showIcon
    showArrow/>
   <calf-notice
    type="error"
    content="为了账户资金安全，需要您参照示例图提供真实资料提交审核。资料仅用于审核，我们将为您严格保密。"
    v-model="noticeVisible4"
    @on-close="handleNotice4"/>
 </div>
</template>

<script>
export default {
  name: 'page-notice',
  data() {
    return {
      noticeVisible1: true,
      noticeVisible2: true,
      noticeVisible3: true,
      noticeVisible4: true
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    handleNotice1() {
      console.log('close')
    },
    handleNotice2() {
      console.log('close')
    },
    handleNotice3() {
      this.$createToast({
        duration: 1 * 1000,
        content: 'toogle'
      }).show()
    },
    handleNotice4() {
      console.log('close')
    }
  },
  components: {},
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.page-notice {
  width: 100%;
  height: 100%;
  background: #f6f6f6;
  .calf-notice {
    margin-top: 10px;
    &:nth-child(1) {
      margin-top: 0;
    }
  }
}
</style>
