<template>
  <div class="page-button">
    <calf-button>按钮（正常）</calf-button>
    <calf-button :disabled="true">按钮（禁止）</calf-button>
    <calf-button :invalid="true">按钮（失效）</calf-button>
    <calf-button :inline="true">确定</calf-button>
    <calf-button :minor="true">次要按钮</calf-button>
    <calf-button :minor="true" :disabled="true">次要按钮</calf-button>
    <calf-button :minor="true" :invalid="true">次要按钮</calf-button>
    <calf-button>
      <span slot="content">按钮文案</span>
      <span slot="desc">离结束还有：01天07时40分47秒</span>
    </calf-button>
    <calf-button :disabled="true">
      <span slot="content">按钮文案</span>
      <span slot="desc">离结束还有：01天07时40分47秒</span>
    </calf-button>
    <calf-button :invalid="true">
      <span slot="content">按钮文案</span>
      <span slot="desc">离结束还有：01天07时40分47秒</span>
    </calf-button>
    <calf-button :icon="icon" @click="handleLoading">触发loading</calf-button>
    <calf-button @click="handleClick">触发弹窗</calf-button>
    <calf-button @click="handleBack">返回</calf-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tid: '',
      icon: ''
    }
  },
  methods: {
    handleClick() {
      this.$createDialog({
        content: '银行预留手机号码用于银行卡进行快捷',
        onConfirm: () => {
          console.log('confirm')
        }
      }).show()
    },
    handleLoading() {
      this.icon = 'loading'
      clearTimeout(this.tid)
      this.tid = setTimeout(() => {
        this.icon = 'success'
      }, 3000)
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
