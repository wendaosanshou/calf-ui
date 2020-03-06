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

<style lang="postcss" scoped>
.calf-textarea-wrapper {
  position: relative;
  transition: height 200ms;
  height: 40px;
  font-size: 14px;
  line-height: 1.429;
  border: 1px solid #e8864c;
  textarea::-webkit-input-placeholder {
    color: #ccc !important;
    text-overflow: ellipsis;
  }
}

.calf-textarea_expanded {
  height: 80px;
}

.calf-textarea_active {
}

.calf-textarea-indicator {
  position: absolute;
  bottom: 7px;
  right: 10px;
  color: #ccc;
}

.calf-textarea {
  width: 100%;
  height: 100%;
  text-align: left;
  padding: 10px;
  box-sizing: border-box;
  font-size: 100%;
  line-height: inherit;
  color: #ccc;
  background-color: #fff;
  border-radius: 2px;
  resize: none;
  border: none;
  outline: none;
}
</style>
