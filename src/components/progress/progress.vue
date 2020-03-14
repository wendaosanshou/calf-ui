<template>
  <div class="calf-progress">
    <progress-line :current="current" :steps="steps" v-if="isLine" />
    <progress-lable :current="current" :steps="steps" :isFinish="isFinish" v-else-if="isLable" />
    <progress-default :current="current" :steps="steps" v-else />
  </div>
</template>

<script>
import ProgressDefault from './progress-default.vue';
import ProgressLine from './progress-line.vue';
import ProgressLable from './progress-label.vue';

const COMPONENT_NAME = 'calf-progress';

const EVENT_CHANGE = 'on-change';
export default {
  name: COMPONENT_NAME,
  data() {
    return {};
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
        return [''];
      }
    },
    isFinish: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isLine() {
      return this.type === 'line';
    },
    isLable() {
      return this.type === 'label';
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
};
</script>

<style lang="postcss"></style>
