<template>
  <transition name="calf-picker-fade">
    <calf-popup
      type="picker"
      :center="false"
      v-show="isVisible"
      @touchmove.prevent
      @mask-click="cancel">
      <div class="calf-picker calf-picker-container">
        <div class="calf-picker-header">
          <i class="calf-icon" @click="cancel"></i>
          <span class="calf-title" v-html="title"></span>
          <span class="calf-label" @click="confirm">{{confirmTxt}}</span>
        </div>

        <div class="calf-picker-content">
          <i class="top-mask"></i>
          <i class="bottom-mask"></i>
          <div class="calf-picker-wraper" ref="wheelWrapper">
            <div v-for="(data,index) in pickerData" :key="index">
              <ul class="calf-picker-list">
                <li class="calf-picker-item" v-for="(item, key) in data" :key="key">
                  {{item.text}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </calf-popup>
  </transition>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import CalfPopup from '../popup/popup.vue'
import visibilityMixin from '../../common/mixins/visibility'
import basicPickerMixin from '../../common/mixins/basic-picker'
import pickerMixin from '../../common/mixins/picker'

const COMPONENT_NAME = 'calf-picker'

const EVENT_CHANGE = 'change'
const EVENT_SELECT = 'select'
const EVENT_CANCEL = 'cancel'

export default {
  name: COMPONENT_NAME,
  mixins: [visibilityMixin, basicPickerMixin, pickerMixin],
  data() {
    return {
      pickerSelectedIndex: [],
      pickerSelectedVal: [],
      pickerSelectedText: [],
      pickerData: this.data.slice(),
      pickerSelectedIndex: this.selectedIndex
    }
  },
  props: {
    data: {
      type: Array,
      default: []
    },
    pending: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    cancel() {
      this.hide()
      this.$emit(EVENT_CANCEL)
    },
    confirm() {
      if (!this.canConfirm()) {
        return
      }
      this.hide()
      this.updatePickerSelected()

      this.$emit(
        EVENT_SELECT,
        this.pickerSelectedVal,
        this.pickerSelectedIndex,
        this.pickerSelectedText
      )
    },
    updatePickerSelected() {
      const dataLength = this.pickerData.length
      const selectedValLength = this.pickerSelectedVal.length

      for (let i = 0; i < dataLength; i++) {
        let index = this.wheels[i].getSelectedIndex()
        this.pickerSelectedIndex[i] = index

        let value = null
        let text = ''
        if (this.pickerData[i].length) {
          value = this.pickerData[i][index][this.valueKey]
          text = this.pickerData[i][index][this.textKey]
        }
        this.pickerSelectedVal[i] = value
        this.pickerSelectedText[i] = text
      }
    },
    show() {
      if (this.isVisible) {
        return
      }

      this.isVisible = true
      this.initWheel()
    },
    initWheel() {
      if (!this.wheels || this.dirty) {
        this.$nextTick(() => {
          this.wheels = this.wheels || []
          let wheelWrapper = this.$refs.wheelWrapper
          for (let i = 0; i < this.pickerData.length; i++) {
            this.createWheel(wheelWrapper, i).enable()
            this.wheels[i].wheelTo(this.pickerSelectedIndex[i])
          }
          this.dirty && this.destroyExtraWheels()
          this.dirty = false
        })
      } else {
        for (let i = 0; i < this.pickerData.length; i++) {
          this.wheels[i].enable()
          this.wheels[i].wheelTo(this.pickerSelectedIndex[i])
        }
      }
    },
    createWheel(wheelWrapper, i) {
      if (!this.wheels[i]) {
        const wheel = (this.wheels[i] = new BScroll(wheelWrapper.children[i], {
          wheel: {
            selectedIndex: this.pickerSelectedIndex[i] || 0,
            wheelWrapperClass: 'calf-picker-list',
            wheelItemClass: 'calf-picker-item'
          },
          swipeTime: this.swipeTime,
          observeDOM: false
        }))
        wheel.on('scrollEnd', () => {
          let selectedIndex = wheel.getSelectedIndex()
          this.$emit(EVENT_CHANGE, i, selectedIndex)
        })
      } else {
        this.wheels[i].refresh()
      }
      return this.wheels[i]
    },
    setData(data, selectedIndex) {
      this.pickerSelectedIndex = selectedIndex ? [...selectedIndex] : []
      this.pickerData = data.slice()
      if (this.isVisible) {
        this.$nextTick(() => {
          const wheelWrapper = this.$refs.wheelWrapper
          this.pickerData.forEach((item, i) => {
            this.createWheel(wheelWrapper, i)
            this.wheels[i].wheelTo(this.pickerSelectedIndex[i])
          })
          this.destroyExtraWheels()
        })
      } else {
        this.dirty = true
      }
    },
    destroyExtraWheels() {
      const dataLength = this.pickerData.length
      if (this.wheels.length > dataLength) {
        const extraWheels = this.wheels.splice(dataLength)
        extraWheels.forEach(wheel => {
          wheel.destroy()
        })
      }
    },
    canConfirm() {
      return this.wheels.every(wheel => {
        return !wheel.isInTransition
      })
    },
    initPickerSelected() {
      this.pickerSelectedVal = []
      if (!this.pickerSelectedIndex.length) {
        this.pickerSelectedIndex = []
        for (let i = 0; i < this.pickerData.length; i++) {
          this.pickerSelectedIndex[i] = 0
        }
      }
    },
    refill(datas) {
      let ret = []
      if (!datas.length) {
        return ret
      }
      datas.forEach((data, index) => {
        ret[index] = this.refillColumn(index, data)
      })
      return ret
    },
    refillColumn(index, data) {
      const wheelWrapper = this.$refs.wheelWrapper
      let scroll = wheelWrapper.children[index].querySelector(
        '.calf-picker-wraper'
      )
      let wheel = this.wheels ? this.wheels[index] : false
      let dist = 0
      if (scroll && wheel) {
        let oldData = this.pickerData[index]
        this.$set(this.pickerData, index, data)
        let selectedIndex = wheel.getSelectedIndex()
        if (oldData.length) {
          let oldValue = oldData[selectedIndex][this.valueKey]
          for (let i = 0; i < data.length; i++) {
            if (data[i][this.valueKey] === oldValue) {
              dist = i
              break
            }
          }
        }
        this.pickerSelectedIndex[index] = dist
        this.$nextTick(() => {
          // recreate wheel so that the wrapperHeight will be correct.
          wheel = this.createWheel(wheelWrapper, index)
          wheel.wheelTo(dist)
        })
      }
      return dist
    }
  },
  components: {
    CalfPopup
  },
  created() {
    this.initPickerSelected()
  }
}
</script>

<style lang="postcss" scoped>
@import '../../common/style/variable.css';
@import '../../common/style/mixin.css';
@import '../../common/style/animation.css';

.calf-picker {
  width: 100%;
  height: 284px;
  background: $picker-bgc;
  .calf-picker-header {
    @include flex(row, space-between, center);
    width: 100%;
    height: 44px;
    border-radius: $picker-radius $picker-radius 0 0;
    border-bottom: 1px solid $color-line-grey;
    .calf-icon {
      @include flex(row, center, center);
      width: 44px;
      height: 44px;
      &:after {
        display: block;
        content: '';
        width: 12px;
        height: 12px;
        background: url('../../common/icon/calfic-close-gray.png');
        background-size: 100% 100%;
      }
    }
    .calf-title {
      width: auto;
      height: 44px;
      line-height: 44px;
      font-size: $picker-title-fontsize;
      color: $picker-title-color;
      text-align: center;
    }
    .calf-label {
      width: auto;
      height: 44px;
      line-height: 44px;
      font-size: $fontsize-large;
      color: $picker-label-right-color;
      padding-right: 16px;
    }
  }
  .calf-picker-content {
    position: relative;
    width: 100%;
    height: 240px;
    i {
      position: absolute;
      left: 0;
      width: 100%;
      height: 96px;
      z-index: 10;
      pointer-events: none;
    }
    .top-mask {
      top: 0;
      border-bottom: 1px solid $color-line-grey;
      background: linear-gradient(
        to top,
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.8)
      );
    }
    .bottom-mask {
      bottom: 0;
      border-top: 1px solid $color-line-grey;
      background: linear-gradient(
        to top,
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.8)
      );
    }
    .calf-picker-wraper {
      position: relative;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      width: 100%;
      height: 240px;
      overflow: auto;
      div {
        flex: 1;
        flex-basis: 0.000000001px;
        width: 1%;
      }
    }
    .calf-picker-list {
      width: 100%;
      height: auto;
      margin-top: 96px;
      .calf-picker-item {
        width: 100%;
        height: 48px;
        line-height: 48px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        font-size: $picker-item-fontsize;
        color: $picker-item-color;
        text-align: center;
      }
    }
  }
}
</style>
