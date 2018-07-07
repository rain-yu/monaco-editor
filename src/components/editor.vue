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
      language: this.language,
      theme: "vs-dark"
    })
    monaco.languages.registerCompletionItemProvider(this.language, {
      provideCompletionItems: () => {
        return this.completion
      }
    })
    // this.editor.setValue(this.value, false)
  },
  methods: {
    renderStyle () {
      return {
        width: this.width,
        height: this.height
      }
    },
    setValue (value) {
      value = String(value).trim()
      if (this.innerValue === value) {
        return
      }
      this.innerValue = value
      this.editor.setValue(value)
      this.$emit('change', value)
    },
    getValue () {
      return this.innerValue
    },
    setReadOnly (readonly) {
      this.editor.updateOptions({
        readOnly: !!readonly
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
