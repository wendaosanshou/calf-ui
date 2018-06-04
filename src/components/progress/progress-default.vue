<template>
  <ul class="progress-list">
    <li class="progress-item"
    :class="{'prev': current > index + 1, 'current': current === index + 1, 'next': current < index + 1}"
    v-for="(item, index) in steps" :key="index">
      <span class="item-icon">{{index + 1}}</span>
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
.progress-list {
  width: auto;
  height: 68px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .progress-item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
      background: resolve('calfic-right-gray.png');
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
        &:after {
          background: resolve('calfic-tick.png');
          background-size: 100% 100%;
        }
      }
    }
    &.current {
      color: #333333;
    }
    &.next {
      color: #cccccc;
    }
    .item-icon {
      position: relative;
      width: 20px;
      height: 20px;
      font-size: 13px;
      line-height: 20px;
      text-align: center;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: resolve('calfic-tick.png');
        background-size: 100% 100%;
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
