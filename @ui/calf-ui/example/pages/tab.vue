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
      tabs1: [
        {
          text: '极速推荐',
          value: 0
        },
        {
          text: '其他贷款',
          value: 1
        }
      ],
      tabs2: [
        {
          text: '极速推荐',
          value: 0
        },
        {
          text: '其他贷款',
          value: 1
        },
        {
          text: '低息贷款',
          value: 2
        }
      ],
      selectTab: 1
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    handleSelect(index, text) {
      this.$createDialog({
        type: 'default',
        title: text,
        content: `index: ${index}  <br/> text: ${text}`
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
