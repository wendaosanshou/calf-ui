<template>
  <ul class="progress-list">
    <li class="progress-item"
    :class="{'prev': current > index, 'current': current === index, 'next': current < index}"
    v-for="(item, index) in steps" :key="index">
      <span class="item-icon">{{current > index ? '' : index + 1}}</span>
      <p class="item-label">{{item}}</p>
    </li>
  </ul>
</template>

<script>
const COMPONENT_NAME = 'progress-logo'

export default {
  name: COMPONENT_NAME,
  data() {
    return {}
  },
  props: {
    current: {
      type: Number,
      default: 0
    },
    steps: {
      type: Array,
      default() {
        return ['']
      }
    }
  },
  computed: {},
  watch: {},
  methods: {},
  components: {},
  mounted() {}
}
</script>

<style lang="postcss" scoped>
@import '../../common/style/variable.css';
@import '../../common/style/animation.css';
@import '../../common/style/mixin.css';

.progress-list {
  @include flex(row, flex-start, center);
  width: auto;
  height: 68px;
  .progress-item {
    @include flex(column, center, center);
    position: relative;
    width: 86px;
    height: 68px;
    margin-left: 6px;
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: -6px;
      width: 12px;
      height: 12px;
      margin-top: -6px;
      background: url('../../common/icon/calfic-right-gray.png');
      background-size: 100% 100%;
    }
    &:nth-child(1) {
      margin-left: 0;
    }
    &:nth-last-child(1) {
      &:after {
        display: none;
      }
    }
    &.prev {
      color: #cccccc;
      .item-icon {
        border: 0;
        background: url('../../common/icon/icon-progress-grey.png');
        background-size: 100% 100%;
      }
    }
    &.current {
      color: #333333;
    }
    &.next {
      color: #cccccc;
      .item-icon {
        border: 1px solid #cccccc;
      }
    }
    .item-icon {
      box-sizing: border-box;
      position: relative;
      width: 20px;
      height: 20px;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      border: 1px solid #333333;
      border-radius: 100%;
    }
    .item-label {
      width: auto;
      height: 16px;
      line-height: 16px;
      margin-top: 4.5px;
      font-size: 12px;
    }
  }
}
</style>
