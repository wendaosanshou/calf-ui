<template>
 <div class="calf-progress">
  <progress-line
    :current="current"
    :steps="steps"
    v-if="isLine" />
  <progress-lable
    :current="current"
    :steps="steps"
    v-else-if="isLable" />
  <progress-default
    :current="current"
    :steps="steps"
    v-else/>
 </div>
</template>

<script>
import ProgressDefault from './progress-default'
import ProgressLine from './progress-line'
import ProgressLable from './progress-label'
const COMPONENT_NAME = 'calf-progress'

export default {
  name: COMPONENT_NAME,
  data() {
    return {}
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
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
  computed: {
    isLine() {
      return this.type === 'line'
    },
    isLable() {
      return this.type === 'label'
    }
  },
  watch: {},
  methods: {},
  components: {
    ProgressDefault,
    ProgressLine,
    ProgressLable
  },
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.calf-progress {
}
</style>
