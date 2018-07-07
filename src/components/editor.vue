<template>
  <div class="monaco-editor" :style="renderStyle()"></div>
</template>
<script>
import * as monaco from 'monaco-editor'
export default {
  name: 'Editor',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    value: {
      type: String,
      default: ''
    },
    language: {
      type: String
    },
    completion: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      innerValue: ''
    }
  },
  watch: {
    value (val) {
      this.setValue(val)
    }
  },
  mounted () {
    this.editor = monaco.editor.create(this.$el, {
      value: this.value,
      language: this.language
    })
    monaco.languages.registerCompletionItemProvider(this.language, {
      provideCompletionItems: () => {
        return this.completion
      }
    })
    this.editor.setValue(this.value, false)
    this.editor.onDidChangeModelContent((e) => {
      this.setValue(this.editor.getValue(), true, false)
    })
    this.editor.onDidBlurEditor((e) => {
      this.$emit('blur', e)
    })
  },
  methods: {
    renderStyle () {
      return {
        width: this.width,
        height: this.height
      }
    },
    setValue (value, fireEvent, synch) {
      value = String(value).trim()
      if (this.innerValue === value) {
        return
      }
      this.innerValue = value
      if (synch !== false) {
        this.editor.setValue(value)
      }
      if (fireEvent !== false) {
        this.$emit('change', value)
      }
    },
    getValue () {
      return this.innerValue
    },
    setReadOnly (readonly) {
      this.editor.updateOptions({
        readOnly: !!readonly
      })
    },
    getModelMarkers () {
      return monaco.editor.getModelMarkers()
    },
    validate () {
      return new Promise((resolve, reject) => {
        var errors = this.getModelMarkers()
        if (!errors.length) {
          resolve()
        } else {
          var first = errors[0]
          reject({
            message: first.message,
            number: first.endLineNumber
          })
        }
      })
    }
  },
  beforeDestroy () {
    this.editor.dispose()
  }
}
</script>
<style>
.monaco-editor{
  border: 1px solid #ddd;
}
</style>
