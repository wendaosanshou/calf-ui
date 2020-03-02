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

<style lang="postcss" scoped>
@import '../../common/style/variable.css';
@import '../../common/style/animation.css';
@import '../../common/style/mixin.css';

.calf-btns-default {
  @include flex(row, flex-start, center);
  width: 100%;
  height: $dialog-btns-height;
  border-top: 1px solid $dialog-line-color;
  border-radius: 0 0 $dialog-radius $dialog-radius;
  &.only-one-btn {
    .calf-button-default-confirm {
      border: 0;
      border-radius: 0 0 $dialog-radius $dialog-radius;
    }
  }
  .calf-dialog-button {
    &:active {
      background: $dialog-btn-bgc-active;
    }
  }
  .calf-button-default-cancel {
    box-sizing: border-box;
    display: block;
    width: 50%;
    height: 100%;
    font-size: $dialog-btn-fontsize;
    color: $dialog-btn-cancel-color;
    text-align: center;
    background: $dialog-bgc;
    border: 0;
    border-radius: 0 0 0 $dialog-radius;
  }
  .calf-button-default-confirm {
    box-sizing: border-box;
    display: block;
    flex-grow: 1;
    width: auto;
    height: 100%;
    font-size: $dialog-btn-fontsize;
    color: #f95c06;
    text-align: center;
    background: $dialog-bgc;
    border: 0;
    border-left: 1px solid $dialog-line-color;
    border-radius: 0 0 $dialog-radius 0;
  }
}

.calf-btns-primary {
  @include flex(row, center, flex-end);
  width: 100%;
  height: auto;
  padding-bottom: $dialog-btns-primary-padding-bottom;
  &.only-one-btn {
    .calf-btn-confirm {
      width: $dialog-one-btn-width;
      height: $dialog-one-btn-height;
      margin-left: 0;
    }
  }
  .calf-btn-confirm {
    margin-left: $dialog-btn-margin;
  }
  .calf-dialog-btn {
    width: $dialog-btn-primary-width;
    height: $dialog-btn-primary-height;
    line-height: $dialog-btn-primary-height;
    font-size: $dialog-btn-primary-fontsize;
    color: $dialog-btn-primary-color;
    background-image: $dialog-btn-primary-bgc;
    border-radius: $dialog-btn-primary-radius;
    border: 0;
  }
}
</style>
