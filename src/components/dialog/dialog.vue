<template>
  <calf-popup type="dialog" v-show="value" @mask-click="close">
    <div class="calf-main">
      <h1 class="calf-header">{{title}}</h1>
      <div class="calf-content">{{content}}</div>
      <div class="calf-btns">
        <button class="calf-dialog-btn calf-btn-confirm" @click="handleConfirm">确认</button>
        <!-- <button class="calf-dialog-btn calf-btn-cancel">取消</button> -->
      </div>
    </div>
  </calf-popup>
</template>

<script>
import CalfPopup from '../popup/popup'
import CalfButton from '../button/button'

const COMPONENT_NAME = 'calf-dialog'
export default {
  name: COMPONENT_NAME,
  props: {
    title: {
      type: String,
      default: '提示'
    },
    content: {
      type: String,
      default: '未知的系统错误'
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('input', false)
    },
    handleConfirm() {
      this.close()
    }
  },
  components: {
    CalfPopup,
    CalfButton
  }
}
</script>

<style lang="postcss" scoped>
.calf-dialog {
}

.calf-main {
  width: 294px;
  height: auto;
  padding-bottom: 24px;
  background: #ffffff;
  border-radius: 8px;
  .calf-header {
    width: 100%;
    height: 48.5px;
    line-height: 48.5px;
    font-size: 16px;
    color: #333333;
    text-align: center;
    border-bottom: 1px solid #f1f1f1;
  }
  .calf-content {
    box-sizing: border-box;
    width: 100%;
    height: auto;
    line-height: 21px;
    font-size: 14px;
    color: #999999;
    text-align: center;
    padding: 16px 21px 24px 21px;
  }
}

.calf-btns {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  .calf-dialog-btn {
    width: 154px;
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
