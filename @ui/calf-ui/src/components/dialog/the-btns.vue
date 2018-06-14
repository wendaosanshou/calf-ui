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
      :inlineCancel="true"
      :disabled="mergeCancelBtn.disabled"
      v-if="!onlyOneBtn"
      @click="handleCancel">{{mergeCancelBtn.text}}</calf-button>
    <calf-button
      class="calf-btn-confirm"
      :inlineConfirm="true"
      :disabled="mergeConfirmBtn.disabled"
      @click="handleConfirm">{{mergeConfirmBtn.text}}</calf-button>
  </div>
 </div>
</template>

<script>
import CalfButton from '../button/button'

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
  },
  components: {
    CalfButton
  },
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.calf-btns-default {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 100%;
  height: 48px;
  line-height: 24px;
  border-top: 1px solid #f1f1f1;
  border-radius: 0 0 8px 8px;
  &.only-one-btn {
    .calf-button-default-confirm {
      border: 0;
      border-radius: 0 0 8px 8px;
    }
  }
  .calf-dialog-button {
    &:active {
      background: rgba(0, 0, 0, 0.3);
    }
  }
  .calf-button-default-cancel {
    box-sizing: border-box;
    display: block;
    width: 50%;
    height: 100%;
    font-size: 16px;
    color: #333333;
    text-align: center;
    background: #ffffff;
    border: 0;
    border-radius: 0 0 0 8px;
  }
  .calf-button-default-confirm {
    box-sizing: border-box;
    display: block;
    flex-grow: 1;
    width: auto;
    height: 100%;
    font-size: 16px;
    color: #f95c06;
    text-align: center;
    background: #ffffff;
    border: 0;
    border-left: 1px solid #f1f1f1;
    border-radius: 0 0 8px 0;
  }
}

.calf-btns-primary {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: auto;
  padding-bottom: 24px;
  &.only-one-btn {
    .calf-btn-confirm {
      width: 180px;
      height: 36px;
      margin-left: 0;
    }
  }
  .calf-btn-confirm {
    margin-left: 15px;
  }
  .calf-dialog-btn {
    width: 124px;
    height: 36px;
    line-height: 16px;
    font-size: 16px;
    color: #ffffff;
    background-image: linear-gradient(-270deg, #fe7336 0%, #ff9155 100%);
    border-radius: 4px;
    border: 0;
  }
}
</style>
