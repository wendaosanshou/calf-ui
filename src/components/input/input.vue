<template>
 <div class="calf-input">
  <div class="calf-input-prepend" v-if="$slots.prepend">
    <slot name="prepend"></slot>
  </div>
  <input class="calf-input-field" />
  <div class="calf-input-append">
    <div class="calf-input-clear">
      <i class="calf-close"></i>
    </div>
    <slot name="append"></slot>
  </div>
 </div>
</template>

<script>
const COMPONENT_NAME = 'calf-input'
export default {
  name: COMPONENT_NAME,
  data() {
    return {}
  },
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  components: {},
  methods: {},
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.calf-input {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 48px;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  .calf-input-prepend {
    box-sizing: border-box;
    max-width: 104px;
    height: 48px;
    line-height: 48px;
    padding-left: 16px;
    font-size: 14px;
    color: #666666;
  }
  .calf-input-field {
    width: auto;
    height: 48px;
    padding-left: 16px;
    font-size: 14px;
    color: #666666;
    border: 0;
    flex-grow: 1;
    .calf-input-clear {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 48px;
      height: 48px;
      .calf-square-select {
        width: 14px;
        height: 14px;
      }
    }
  }
}
</style>
