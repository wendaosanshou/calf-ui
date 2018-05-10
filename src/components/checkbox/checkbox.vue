<template>
  <div class="calf-checkbox" @click="handleSelectCheckbox">
    <i :class="checkboxClass"></i>
  </div>
</template>

<script>
const COMPONENT_NAME = 'calf-checkbox'
export default {
  name: COMPONENT_NAME,
  data() {
    return {
      isCheckboxSelect: false
    }
  },
  computed: {
    checkboxClass() {
      return this.isCheckboxSelect
        ? 'calf-square-select'
        : 'calf-square-unselect'
    }
  },
  methods: {
    handleSelectCheckbox() {
      this.isCheckboxSelect = !this.isCheckboxSelect
    }
  },
  mounted() {}
}
</script>

<style lang="postcss" scoped>
@import '../../common/style/base.css';

.calf-checkbox {
  display: block;
  width: 16px;
  height: 16px;
  i {
    display: block;
    width: 100%;
    height: 100%;
    transition: all 0.1s;
  }
  &.calf-square-select {
    transform: scale(1.24);
  }
}
</style>
