<template>
 <div class="page-textarea">
   <calf-textarea v-model="textValue"/>
   <calf-button @click="handleConfirm">提交</calf-button>
 </div>
</template>

<script>
export default {
  name: 'page-textarea',
  data() {
    return {
      textValue: ''
    }
  },
  methods: {
    handleConfirm() {
      console.log(this.textValue)
    }
  },
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.page-textarea {
  padding: 20px;
  .calf-button {
    margin-top: 10px;
  }
}
</style>
