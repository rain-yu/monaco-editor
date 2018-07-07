<template>
  <editor language="typescript" :width="width" :height="height" :completion="completion"></editor>
</template>

<script>
import * as monaco from 'monaco-editor'
import Editor from './editor'
import './extraLibs'

export default {
  name: 'EditorTypescript',
  components: {
    Editor
  },
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
    completion: {
      type: Array,
      default () {
        return [{
          label: 'simpleText',
          kind: monaco.languages.CompletionItemKind.Text
        }, {
          label: 'testing',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: {
            value: 'testing(${1:condition})'
          }
        }, {
          label: 'ifelse',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: {
            value: [
              'if (${1:condition}) {',
              '\t$0',
              '} else {',
              '\t',
              '}'
            ].join('\n')
          },
          documentation: 'If-Else Statement'
        }]
      }
    }
  },
  mounted () {

  }
}
</script>
