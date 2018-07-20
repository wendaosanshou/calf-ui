<template>
 <div class="page-switch">
   <calf-switch v-model="values" @change="handleChange"/>
 </div>
</template>

<script>
export default {
  name: 'page-switch',
  data() {
    return {
      values: true
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
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
