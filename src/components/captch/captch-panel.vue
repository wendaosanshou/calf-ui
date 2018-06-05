<template>
  <div class="captch-panel">
    <h4 class="captch-panel-title">数字安全键盘</h4>
    <ul class="captch-panel-list">
      <li class="captch-panel-item">
        <div class="item-number" @click="handleChooseNumber(1)">1</div>
        <div class="item-number" @click="handleChooseNumber(2)">2</div>
        <div class="item-number" @click="handleChooseNumber(3)">3</div>
      </li>
      <li class="captch-panel-item">
        <div class="item-number" @click="handleChooseNumber(4)">4</div>
        <div class="item-number" @click="handleChooseNumber(5)">5</div>
        <div class="item-number" @click="handleChooseNumber(6)">6</div>
      </li>
      <li class="captch-panel-item">
        <div class="item-number" @click="handleChooseNumber(7)">7</div>
        <div class="item-number" @click="handleChooseNumber(8)">8</div>
        <div class="item-number" @click="handleChooseNumber(9)">9</div>
      </li>
      <li class="captch-panel-item">
        <div class="item-number bg-gray"></div>
        <div class="item-number" @click="handleChooseNumber(0)">0</div>
        <div class="item-number bg-gray item-icon-delete" @click="handleDelete"></div>
      </li>
    </ul>
  </div>
</template>

<script>
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
  computed: {},
  watch: {},
  methods: {
    handleChooseNumber(number) {
      this.$emit('on-choose', number)
    },
    handleDelete() {
      this.$emit('on-delete')
    }
  },
  components: {},
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.captch-panel {
  padding-top: 28px;
  .captch-panel-title {
    width: 100%;
    height: 36px;
    line-height: 36px;
    font-size: 12px;
    color: #14ba89;
    text-align: center;
    background: #f9f9f9;
  }
  .captch-panel-list {
    .captch-panel-item {
      width: 100%;
      height: 54px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .item-number {
      position: relative;
      flex-grow: 1;
      width: auto;
      height: 54px;
      line-height: 54px;
      font-size: 24px;
      color: #333333;
      text-align: center;
      background: #ffffff;
      &.bg-gray {
        background: #f6f6f6;
      }
      &.item-icon-delete {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        &:after {
          display: block;
          content: '';
          width: 16px;
          height: 16px;
          background: resolve('calfic-close-gray.png');
          background-size: 100% 100%;
        }
      }
      &:active {
        background: rgba(0, 0, 0, 0.03);
      }
    }
  }
}
</style>
