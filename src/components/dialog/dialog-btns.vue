<template>
 <div class="base-btns">
  <div class="calf-btns-default"
    :class="{'only-one-btn': onlyOneBtn}"
    v-if="type === 'default'">
    <button
      class="calf-dialog-button calf-button-default-cancel"
      @click="handleCancel"
      v-if="!onlyOneBtn">{{mergeCancelBtn.text}}</button>
    <button
      class="calf-dialog-button calf-button-default-confirm"
      @click="handleConfirm">{{mergeConfirmBtn.text}}</button>
  </div>
  <div class="calf-btns-primary"
    :class="{'only-one-btn': onlyOneBtn}"
    v-else-if="type === 'primary'">
    <calf-button
      :inline="true"
      :minor="true"
      :disabled="mergeCancelBtn.disabled"
      v-if="!onlyOneBtn"
      @click="handleCancel">{{mergeCancelBtn.text}}</calf-button>
    <calf-button
      class="calf-btn-confirm"
      :inline="true"
      :disabled="mergeConfirmBtn.disabled"
      @click="handleConfirm">{{mergeConfirmBtn.text}}</calf-button>
  </div>
 </div>
</template>

<script>
const defConfirmBtn = {
  text: '确定',
  disabled: false
}

const defCancelBtn = {
  text: '取消',
  disabled: false
}

const mergeBtn = (btn, defBtn) => {
  if (typeof btn === 'string') {
    btn = {
      text: btn
    }
  }
  return Object.assign({}, defBtn, btn)
}
export default {
  name: 'base-btns',
  data() {
    return {}
  },
  props: {
    onlyOneBtn: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    confirmBtn: {
      type: [Object, String],
      default() {
        return {
          ...defConfirmBtn
        }
      }
    },
    cancelBtn: {
      type: [Object, String],
      default() {
        return {
          ...defCancelBtn
        }
      }
    }
  },
  computed: {
    mergeConfirmBtn() {
      return mergeBtn(this.confirmBtn, defConfirmBtn)
    },
    mergeCancelBtn() {
      return mergeBtn(this.cancelBtn, defCancelBtn)
    }
  },
  methods: {
    handleCancel(e) {
      if (this.mergeCancelBtn.disabled) {
        return
      }
      this.$emit('on-cancle', e)
    },
    handleConfirm(e) {
      if (this.mergeConfirmBtn.disabled) {
        return
      }
      this.$emit('on-confirm', e)
    }
  }
}
</script>

<style lang="postcss" src="../../style/dialog-btns.css"></style>
