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
        <dialog-btns
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
import DialogBtns from './dialog-btns'

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
    DialogBtns
  }
}
</script>

<style lang="postcss" src="../../style/dialog.css"></style>
