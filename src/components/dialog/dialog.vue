<template>
  <calf-popup type="dialog" v-show="isVisible">
    <div class="calf-main" :class="rootClass">
      <h1 class="calf-header">{{title}}</h1>
      <div class="calf-content">{{content}}</div>
      <div class="calf-btns-default"
        v-if="type === 'default'">
        <button
          class="calf-button-default-cancel"
          @click="handleCancel">取消</button>
        <button
          class="calf-button-default-confirm"
          @click="handleConfirm">确定</button>
      </div>
      <div class="calf-btns-primary"
        v-else-if="type === 'primary'">
        <calf-button
          :inlineCancel="true"
          @click="handleCancel">取消</calf-button>
        <calf-button
          class="calf-btn-confirm"
          :inlineConfirm="true"
          @click="handleConfirm">确认</calf-button>
      </div>
    </div>
  </calf-popup>
</template>

<script>
import visibilityMixin from '../../common/mixins/visibility'
import CalfPopup from '../popup/popup'
import CalfButton from '../button/button'

const COMPONENT_NAME = 'calf-dialog'
const EVENT_CONFIRM = 'confirm'
const EVENT_CANCEL = 'cancel'

export default {
  name: COMPONENT_NAME,
  mixins: [visibilityMixin],
  props: {
    title: {
      type: String,
      default: '提示'
    },
    content: {
      type: String,
      default: '未知的系统错误'
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    rootClass() {
      return `calf-dialog-${this.type}`
    }
  },
  methods: {
    handleCancel(e) {
      this.hide()
      this.$emit(EVENT_CANCEL, e)
    },
    handleConfirm(e) {
      this.hide()
      this.$emit(EVENT_CONFIRM, e)
    }
  },
  components: {
    CalfPopup,
    CalfButton
  }
}
</script>

<style lang="postcss" scoped>
.calf-main {
  width: 295px;
  height: auto;
  background: #ffffff;
  border-radius: 4px;
  .calf-header {
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    color: #333333;
    text-align: center;
    background: #ffffff;
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid #f1f1f1;
  }
  .calf-content {
    box-sizing: border-box;
    width: 100%;
    min-height: 68px;
    height: auto;
    font-size: 13px;
    color: #999999;
    letter-spacing: 0;
    line-height: 20px;
    text-align: center;
    padding: 20px 16px 28px 17px;
  }
  &.calf-dialog-default {
  }
}

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
