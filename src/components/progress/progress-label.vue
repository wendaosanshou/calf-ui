<template>
  <ul class="progress-label">
    <li class="progress-item"
      :class="{'prev': current > index, 'current': current === index, 'next': current < index}"
      v-for="(item, index) in steps" :key="index">
      <div class="item-logo-wrap">
        <i class="item-logo" :class="{'is-finish': isFinish, 'not-finish' : !isFinish}"></i>
        <div class="line"></div>
      </div>
      <div class="item-content">
        <h4 class="item-title" v-if="item.title">{{item.title}}</h4>
        <p class="item-desc" v-if="item.desc">{{item.desc}}</p>
      </div>
      <span class="item-label" v-if="item.label">{{item.label}}</span>
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
    },
    isFinish: {
      type: Boolean,
      default: false
    }
  },
  computed: {},
  watch: {},
  methods: {},
  components: {},
  mounted() {}
}
</script>

<style lang="postcss" src="../../style/progress-label.css"></style>