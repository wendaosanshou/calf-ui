<template>
  <div class="app-test">
    123123
    <div class="app-header">
      456456
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-test',
  mixins: [],
  data() {
    return {}
  },
  props: {},
  computed: {},
  watch: {},
  methods: {},
  components: {},
  mounted() {}
}
</script>

<style lang="postcss" scoped>
@import "./common.css";

.app-test {
  background: #ccc;
  .app-header {
    color: #333;
  }
}
</style>
