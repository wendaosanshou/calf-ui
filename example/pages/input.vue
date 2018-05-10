<template>
 <div class="page-input">
   <calf-input>
     <label slot="prepend" for="calf-input-field">测试</label>
   </calf-input>
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
}
</style>
