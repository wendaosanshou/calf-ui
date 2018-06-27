<template>
  <div class="page-popup">
    <calf-button @click="handleClick">触发</calf-button>
    <calf-popup :maskCancle="true" v-model="visible">
      借款金额不能超过100万
    </calf-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    handleClick() {
      this.visible = true
    }
  }
}
</script>

<style scoped>
.page-popup {
  padding: 20px;
}
</style>
