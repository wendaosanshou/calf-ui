<template>
  <div class="captch-panel">
    <div class="captch-panel-title">
      <i class="title-logo"></i>
      <span class="title-content">数字安全键盘</span>
    </div>
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
@import '../../common/style/variable.css';
@import '../../common/style/mixin.css';
@import '../../common/style/animation.css';

$panel-title-height: 36px;
$panel-title-bgc: #f9f9f9;
$panel-logo-width: 16px;
$panel-title-text-margin: 6px;
$panel-content-item-height: 54px;
$panel-content-item-bgc-active: rgba(0, 0, 0, 0.03);

.captch-panel {
  .captch-panel-title {
    @include flex(row, center, center);
    width: 100%;
    height: $panel-title-height;
    text-align: center;
    background: $panel-title-bgc;
    .title-logo {
      display: block;
      width: $panel-logo-width;
      height: $panel-logo-width;
      background: resolve('calfic-shield.png');
      background-size: 100% 100%;
    }
    .title-content {
      width: auto;
      height: $panel-title-height;
      line-height: $panel-title-height;
      margin-left: $panel-title-text-margin;
      font-size: $fontsize-small;
      color: $color-green;
    }
  }
  .captch-panel-list {
    .captch-panel-item {
      @include flex(row, flex-start, flex-start);
      width: 100%;
      height: $panel-content-item-height;
    }
    .item-number {
      position: relative;
      flex-grow: 1;
      width: auto;
      height: $panel-content-item-height;
      line-height: $panel-content-item-height;
      font-size: $fontsize-large-xxx;
      color: $color-grey-dark-ss;
      text-align: center;
      background: $color-bg-white;
      &.bg-gray {
        background: $color-bg-grey;
      }
      &.item-icon-delete {
        @include flex(row, center, center);
        &:after {
          display: block;
          content: '';
          width: $panel-logo-width;
          height: $panel-logo-width;
          background: resolve('calfic-close-gray.png');
          background-size: 100% 100%;
        }
      }
      &:active {
        background: $panel-content-item-bgc-active;
      }
    }
  }
}
</style>
