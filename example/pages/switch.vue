<template>
 <div class="page-switch">
   <calf-switch v-model="values"/>
 </div>
</template>

<script>
export default {
  name: 'page-switch',
  data() {
    return {
      values: false
    }
  },
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.page-switch {
  padding: 20px;
}
</style>
