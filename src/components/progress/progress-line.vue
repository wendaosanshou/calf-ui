<template>
  <ul class="progress-line">
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

<style lang="postcss" src="../../style/progress-line.css"></style>
