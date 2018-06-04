<template>
 <div class="page-progress">
  <calf-progress
    :current="current1"
    :steps="progress1">
  </calf-progress>
  <calf-button @click="handleProgress1">下一步</calf-button>
  <calf-progress
    :type="'line'"
    :current="current2"
    :steps="progress1"></calf-progress>
  <calf-button @click="handleProgress2">下一步</calf-button>
  <calf-progress
    :type="'label'"
    :current="current3"
    :steps="progress2"
    :isFinish="true"></calf-progress>
  <calf-button @click="handleProgress3">下一步</calf-button>
 </div>
</template>

<script>
export default {
  name: 'page-progress',
  data() {
    return {
      current1: 1,
      current2: 1,
      current3: 1,
      progress1: ['芝麻认证', '运营商认证', '基本信息', '实名认证'],
      progress2: [
        {
          title: '填写申请资料',
          desc: '填写基本信息视频认证',
          label: '2017/08/28 19:36:18'
        },
        {
          title: '填写申请资料',
          desc: '填写基本信息视频认证',
          label: '2017/08/28 19:36:18'
        },
        {
          title: '填写申请资料',
          desc: '填写基本信息视频认证',
          label: '2017/08/28 19:36:18'
        }
      ]
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    handleProgress1() {
      this.current1++
    },
    handleProgress2() {
      this.current2++
    },
    handleProgress3() {
      this.current3++
    }
  },
  components: {},
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.page-progress {
  .calf-button {
    width: 200px;
    height: auto;
    margin: 10px auto;
  }
}
</style>
