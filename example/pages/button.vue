<template>
  <div class="page-button">
    <calf-button>按钮（正常）</calf-button>
    <calf-button :disabled="true">按钮（禁止）</calf-button>
    <calf-button :invalid="true">按钮（失效）</calf-button>
    <calf-button :inlineCancel="true">取消</calf-button>
    <calf-button :inlineConfirm="true">确定</calf-button>
    <calf-button>
      <span slot="content">按钮文案</span>
      <span slot="desc">离结束还有：01天07时40分47秒</span>
    </calf-button>
    <calf-button :disabled="true">
      <span slot="content">按钮文案</span>
      <span slot="desc">离结束还有：01天07时40分47秒</span>
    </calf-button>
    <calf-button @click="handleClick">触发弹窗</calf-button>
    <calf-button @click="handleBack">返回</calf-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$createDialog({
        content: '银行预留手机号码用于银行卡进行快捷',
        onConfirm: () => {
          console.log('confirm')
        }
      }).show()
    },
    handleBack() {
      history.go(-1)
    }
  }
}
</script>

<style lang="postcss" scoped>
.page-button {
  padding: 20px;
  .calf-button {
    margin: 10px 0;
  }
}
</style>
