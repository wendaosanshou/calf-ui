<template>
 <div class="page-input">
   <calf-input/>
 </div>
</template>

<script>
export default {
  name: 'page-input',
  data() {
    return {}
  },
  components: {},
  methods: {},
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.page-input {
  padding: 20px 0;
  .calf-input {
    border-bottom: 0;
    &:nth-last-child(1) {
      border-bottom: 1px solid #cccccc;
    }
  }
}
</style>
