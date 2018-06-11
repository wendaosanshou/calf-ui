<template>
  <transition name="calf-picker-fade">
    <calf-popup
      :center="false"
      v-show="isVisible"
      @touchmove.prevent
      @mask-click="cancel">
      <div class="calf-list-picker calf-picker-container">
        <ul class="calf-list-content">
          <li class="calf-item"
            :class="{'active': pickerSelectedIndex === index}"
            v-for="(item, index) in data"
            :key="index"
            @click="confirm(item.value, index, item.text)">{{item.text}}</li>
        </ul>
        <div class="calf-item-cancel" @click="cancel">取消</div>
      </div>
    </calf-popup>
  </transition>
</template>

<script>
import CalfPopup from '../popup/popup.vue'
import visibilityMixin from '../../common/mixins/visibility'

const COMPONENT_NAME = 'calf-list-picker'

const EVENT_SELECT = 'select'
const EVENT_CANCEL = 'cancel'

export default {
  name: COMPONENT_NAME,
  mixins: [visibilityMixin],
  data() {
    return {
      pickerSelectedIndex: this.selectedIndex
    }
  },
  props: {
    selectedIndex: {
      type: Number,
      default: -1
    },
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    cancel() {
      this.$emit(EVENT_CANCEL)
      this.hide()
    },
    confirm(value, index, text) {
      this.pickerSelectedIndex = index
      this.$emit(EVENT_SELECT, value, text, index)
      this.hide()
    }
  },
  components: {
    CalfPopup
  },
  mounted() {}
}
</script>

<style lang="postcss" scoped>
@import '../../common/style/animation.css';

.calf-list-picker {
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 0 16px 12px 16px;
  .calf-list-content {
    width: 100%;
    height: auto;
    margin: 0 auto 8px auto;
    background: #ffffff;
    border-radius: 8px;
    .calf-item {
      width: 100%;
      height: 48px;
      line-height: 48px;
      font-size: 15px;
      color: #333333;
      text-align: center;
      background: #ffffff;
      border-bottom: 1px solid #f1f1f1;
      &.active {
        color: #f95c06;
      }
      &:nth-child(1) {
        border-radius: 8px 8px 0 0;
      }
      &:nth-last-child(1) {
        border-radius: 0 0 8px 8px;
        border-bottom: 0;
      }
    }
  }
  .calf-item-cancel {
    width: 100%;
    height: 48px;
    font-size: 16px;
    color: #666666;
    text-align: center;
    line-height: 48px;
    background: #ffffff;
    border-radius: 8px;
  }
}
</style>
