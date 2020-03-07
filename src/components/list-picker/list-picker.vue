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

<style lang="postcss" src="../../style/list-picker.css"></style>
