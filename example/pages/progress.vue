<template>
 <div class="page-progress">
   <calf-progress :current="2" :steps="progress1"></calf-progress>
   <calf-progress :type="'line'" :current="2" :steps="progress1"></calf-progress>
 </div>
</template>

<script>
export default {
  name: 'page-progress',
  data() {
    return {
      progress1: ['芝麻认证', '运营商认证', '基本信息', '实名认证']
    }
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
.page-progress {
}
</style>
