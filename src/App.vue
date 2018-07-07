<template>
  <div id="app">
    <editor-typescript width="100%" height="500px"></editor-typescript>
  </div>
</template>

<script>
import EditorTypescript from './components/editor-typescript'
console.log(EditorTypescript)
export default {
  name: 'App',
  components: {
    EditorTypescript
  }
}
</script>
