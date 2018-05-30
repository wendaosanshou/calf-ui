<template>
  <div class="page-dialog">
    <calf-button @click="handleClick1">触发默认弹窗</calf-button>
    <calf-button @click="handleClick2">触发主弹窗</calf-button>
    <calf-button @click="handleClick3">单按钮1</calf-button>
    <calf-button @click="handleClick4">单按钮2</calf-button>
    <calf-button @click="handleClick5">自定义弹窗</calf-button>
    <calf-dialog v-model="dialogVisible" type="default" :showClose="true">
      <img src="../assets/img/icon-loan-success.png" class="dialog-img">
      <p class="dialog-desc">亲，完成后就能马上拿钱了哦~</p>
    </calf-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClick1() {
      this.$createDialog({
        type: 'default',
        title: '弹窗标题',
        content: '银行预留手机号码用于银行卡进行快捷支付',
        showClose: true,
        cancelBtn: {
          text: '上一步',
          disabled: false
        },
        onConfirm: () => {
          console.log('confirm')
        },
        onCancel: () => {
          console.log('cancel')
        }
      }).show()
    },
    handleClick2() {
      this.$createDialog({
        type: 'primary',
        content: '银行预留手机号码用于银行卡进行快捷支付时进行身份验证。',
        confirmBtn: {
          text: '我知道了'
        }
      }).show()
    },
    handleClick3() {
      this.$createDialog({
        type: 'default',
        content: '银行预留手机号码用于银行卡进行快捷支付时进行身份验证。',
        onlyOneBtn: true,
        confirmBtn: {
          text: '我知道了'
        }
      }).show()
    },
    handleClick4() {
      this.$createDialog({
        type: 'primary',
        content: '银行预留手机号码用于银行卡进行快捷支付时进行身份验证。',
        onlyOneBtn: true,
        confirmBtn: {
          text: '我知道了'
        }
      }).show()
    },
    handleClick5() {
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>
.calf-button {
  margin: 10px 0;
}

.page-dialog {
  padding: 20px;
}

.dialog-img {
  width: 210px;
  height: 150px;
}

.dialog-desc {
  width: 100%;
  height: auto;
  margin-top: 24px;
  font-size: 13px;
  color: #999999;
}
</style>
