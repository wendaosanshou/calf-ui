<template>
 <div class="page-captch">
   <calf-captch v-model="captchVisible"/>
   <calf-button @click="handlecaptch">触发</calf-button>
 </div>
</template>

<script>
export default {
  name: 'page-captch',
  data() {
    return {
      captchVisible: false
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    handlecaptch() {
      this.captchVisible = true
    }
  },
  components: {},
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.page-captch {
  padding: 16px;
}
</style>
