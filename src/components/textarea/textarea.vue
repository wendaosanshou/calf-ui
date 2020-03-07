<template>
  <div class="calf-textarea-wrapper" :class="{'calf-textarea_expanded': expanded, 'calf-textarea_active': isFocus}">
    <textarea
      class="calf-textarea"
      v-model="textareaValue"
      v-bind="$props"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      @focus="handleFocus"
      @blur="handleBlur">
    </textarea>
    <span v-show="expanded" class="calf-textarea-indicator">{{remain}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
const COMPONENT_NAME = 'calf-textarea'
const EVENT_INPUT = 'input'

export default {
  name: COMPONENT_NAME,
  data() {
    return {
      textareaValue: this.value,
      expanded: false,
      isFocus: false
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    cols: Number,
    rows: Number,
    readonly: Boolean,
    wrap: String,
    required: Boolean,
    placeholder: {
      type: String,
      default: 'please type here...'
    },
    dirname: String,
    form: String,
    name: String,
    autofocus: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 60
    }
  },
  computed: {
    remain() {
      return this.maxlength - this.value.length
    }
  },
  watch: {
    value(newValue) {
      this.textareaValue = newValue
    },
    textareaValue(newValue) {
      this.$emit(EVENT_INPUT, newValue)
      if (!this.isFocus && this.expanded) {
        this.expanded = false
      }
    }
  },
  methods: {
    handleFocus(e) {
      this.$emit('focus', e)
      this.expanded = true
      this.isFocus = true
    },
    handleBlur(e) {
      this.$emit('blur', e)
      if (this.textareaValue.length === 0) {
        this.expanded = false
      }
      this.isFocus = false
    }
  }
}
</script>

<style lang="postcss" src="../../style/textarea.css"></style>
