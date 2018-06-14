<template>
 <div class="page-captch">
   <calf-captch
    v-model="captchVisible"
    :mobile="mobile"
    :type="captchType"/>
   <calf-button @click="handleCaptch">触发验证码</calf-button>
   <calf-button @click="handlePassword">触发密码</calf-button>
 </div>
</template>

<script>
export default {
  name: 'page-captch',
  data() {
    return {
      captchVisible: false,
      mobile: '18612345678',
      captchType: 'verify'
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    handleCaptch() {
      this.captchType = 'verify'
      this.captchVisible = true
    },
    handlePassword() {
      this.captchType = 'password'
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
.calf-button {
  margin: 10px 0;
}
</style>
