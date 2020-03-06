<template>
  <ul class="progress-list">
    <li class="progress-item no-rem"
    :class="{'prev': current > index, 'current': current === index, 'next': current < index}"
    v-for="(item, index) in steps" :key="index">
      <p class="item-label">{{item}}</p>
    </li>
  </ul>
</template>

<script>
const COMPONENT_NAME = 'progress-line'

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
      required: true
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
    width: 90px;
    height: 68px;
    margin-left: 6px;
    &.no-rem:before {
      box-sizing: border-box;
      content: '';
      position: absolute;
      left: 46%;
      top: 27%;
      width: 8px;
      height: 8px;
      border-radius: 8px;
      background: #fb7a52;
      z-index: 999;
    }
    &:after {
      content: '';
      position: absolute;
      left: 49px;
      top: 21px;
      width: 90px;
      height: 2px;
      background: #fb7a52;
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
      color: #999999;
    }
    &.current {
      color: #f95c06;
      &:before {
        background: #fb7a52;
      }
      &:after {
        background: #cccccc;
      }
    }
    &.next {
      color: #cccccc;
      &:before {
        background: #cccccc;
      }
      &:after {
        background: #cccccc;
      }
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
