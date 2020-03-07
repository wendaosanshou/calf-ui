<template>
  <ul class="progress-default">
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

<style lang="postcss" src="../../style/progress-default.css"></style>
