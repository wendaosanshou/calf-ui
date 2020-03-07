<template>
  <div class="captch-panel">
    <div class="captch-panel-title">
      <i class="title-logo"></i>
      <span class="title-content">数字安全键盘</span>
    </div>
    <ul class="captch-panel-list">
      <li class="captch-panel-item">
        <div class="item-number" @click="handleChoose(1)">1</div>
        <div class="item-number" @click="handleChoose(2)">2</div>
        <div class="item-number" @click="handleChoose(3)">3</div>
      </li>
      <li class="captch-panel-item">
        <div class="item-number" @click="handleChoose(4)">4</div>
        <div class="item-number" @click="handleChoose(5)">5</div>
        <div class="item-number" @click="handleChoose(6)">6</div>
      </li>
      <li class="captch-panel-item">
        <div class="item-number" @click="handleChoose(7)">7</div>
        <div class="item-number" @click="handleChoose(8)">8</div>
        <div class="item-number" @click="handleChoose(9)">9</div>
      </li>
      <li class="captch-panel-item">
        <div class="item-number bg-gray"></div>
        <div class="item-number" @click="handleChoose(0)">0</div>
        <div class="item-number bg-gray item-icon-delete" @click="onDelete"></div>
      </li>
    </ul>
  </div>
</template>

<script>
const EVENT_CHOOSE = 'on-choose'
const EVENT_DELETE = 'on-delete'

export default {
  name: 'captch-panel',
  data() {
    return {}
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0
    },
    codes: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    handleChoose(number) {
      this.$emit(EVENT_CHOOSE, number)
    },
    onDelete() {
      this.$emit(EVENT_DELETE)
    }
  },
  components: {},
  mounted() {}
}
</script>

<style lang="postcss" src="../../style/captch-panel.css"></style>
