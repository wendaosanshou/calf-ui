<template>
 <div class="page-tab">
   <calf-tab :tabs="tabs1" :selectTab="0"></calf-tab>
   <calf-tab :tabs="tabs2" :selectTab="0" lineWidth="40px" @select="handleSelect"></calf-tab>
 </div>
</template>

<script>
export default {
  name: 'page-tab',
  data() {
    return {
      tabs1: ['极速推荐', '其他贷款'],
      tabs2: ['极速推荐', '热门贷款', '其他贷款'],
      selectTab: 1
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    handleSelect(item, index) {
      this.$createDialog({
        type: 'default',
        title: item,
        content: `index: ${index}  <br/> item: ${item}`
      }).show()
    }
  },
  components: {},
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.page-tab {
  width: 100%;
  height: 100%;
  background: #f6f6f6;
  .calf-tab {
    margin-top: 20px;
    &:nth-child(1) {
      margin-top: 0;
    }
  }
}
</style>
