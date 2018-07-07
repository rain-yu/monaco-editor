<template>
  <div id="app">
    <editor-typescript ref="editor" @blur="handleBlur" @change="handleChange" :value="innerValue"></editor-typescript>
  </div>
</template>

<script>
import { subscribeEvent, publishEvent } from './utils'
import EditorTypescript from './components/editor-typescript'

window.PublishEvent = (name, data) => {
  if (!EventList[name]) {
    return
  }
  EventList[name](data)
}
export default {
  name: 'App',
  components: {
    EditorTypescript
  },
  data () {
    return {
      innerValue: ''
    }
  },
  mounted () {
    subscribeEvent('sync-value', (evt) => {
      this.innerValue = evt
    })
    subscribeEvent('validate-value', (evt) => {
      this.$refs.editor.validate().then(() => {
        publishEvent('validate-value', {
          status: 'success'
        })
      }, (error) => {
        publishEvent('validate-value', {
          status: 'error',
          error
        })
      })
    })
  },
  methods: {
    handleBlur (evt) {
      publishEvent('blur', {
        value: this.$refs.editor.getValue()
      })
    },
    handleChange (evt) {
      publishEvent('change', evt)
    }
  }
}
</script>
<style>
html,body{
  height: 100%;
  padding: 0;
  margin: 0;
}
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
