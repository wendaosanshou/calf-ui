<template>
  <ul class="progress-list">
    <li class="progress-item"
    :class="{'prev': current > index + 1, 'current': current === index + 1, 'next': current < index + 1}"
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
    width: 90px;
    height: 68px;
    margin-left: 6px;
    &:before {
      content: '';
      position: absolute;
      left: 43px;
      top: 18px;
      width: 8px;
      height: 8px;
      border-radius: 100%;
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
