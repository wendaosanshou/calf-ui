<template>
  <div class="popup-view">
    <calf-button @click="handleClick">触发</calf-button>
    <calf-popup v-model="visible">123123</calf-popup>
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
      console.log('click')
      this.visible = true
    }
  }
}
</script>

<style scoped>
.popup-view {
  padding: 20px;
}
</style>
