<template>
  <transition name="calf-dialog-fade">
    <calf-popup
      animation="dialog"
      type="dialog"
      @mask-click="handleMaskClick"
      v-show="isVisible">
      <div class="calf-dialog calf-dialog-container" :class="rootClass">
        <h1 class="calf-header">
          {{title}}
          <i class="icon-close" @click="handleCancel" v-if="showClose || !hasTitle"></i>
        </h1>
        <div class="calf-content" v-if="$slots.default">
          <slot></slot>
        </div>
        <div class="calf-content" v-else v-html="content"></div>
        <the-btns
          :type="type"
          :confirmBtn="confirmBtn"
          :cancelBtn="cancelBtn"
          :onlyOneBtn="onlyOneBtn"
          @on-cancle="handleCancel"
          @on-confirm="handleConfirm"/>
      </div>
    </calf-popup>
  </transition>
</template>

<script>
import visibilityMixin from '../../common/mixins/visibility'
import CalfPopup from '../popup/popup'
import TheBtns from './the-btns'

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
    },
    showClose: {
      type: Boolean,
      default: false
    },
    maskCancle: {
      type: Boolean,
      default: false
    },
    confirmBtn: {
      type: [Object, String],
      default: '确定'
    },
    cancelBtn: {
      type: [Object, String],
      default: '取消'
    },
    onlyOneBtn: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasTitle() {
      return this.title && this.title.length > 0
    },
    rootClass() {
      let allRootClass = [`calf-dialog-${this.type}`]
      if (this.hasTitle) {
        allRootClass.push('has-title')
      }
      return allRootClass.join(' ')
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
    },
    handleMaskClick(e) {
      if (this.maskCancle) {
        this.hide()
      }
    }
  },
  components: {
    CalfPopup,
    TheBtns
  }
}
</script>

<style lang="postcss" scoped>
@import '../../common/style/animation.css';

.calf-dialog {
  width: 295px;
  height: auto;
  background: #ffffff;
  border-radius: 8px;
  &.has-title {
    .calf-header {
      border-bottom: 1px solid #f1f1f1;
    }
    .calf-content {
      padding: 20px 16px 28px 17px;
    }
  }
  .calf-header {
    position: relative;
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    color: #333333;
    text-align: center;
    background: #ffffff;
    border-radius: 8px 8px 0 0;

    .icon-close {
      position: absolute;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      top: 0;
      right: 0;
      width: 44px;
      height: 44px;
      &:after {
        content: '';
        display: block;
        width: 14px;
        height: 14px;
        background: resolve('calfic-close-gray.png');
        background-size: 100% 100%;
      }
    }
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
    padding: 0 16px 28px 17px;
  }
}
</style>
