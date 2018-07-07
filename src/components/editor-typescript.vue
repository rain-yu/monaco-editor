<template>
  <editor ref="editor" language="typescript" :width="width" :height="height" :value="value" :completion="completion" @change="handleChange" @blur="handleBlur"></editor>
</template>

<script>
import * as monaco from 'monaco-editor'
import Editor from './editor'
import './extraLibs'

// monaco.languages.registerCompletionItemProvider('typescript', {
//     provideCompletionItems: function(model, position) {
//         console.log(position)
//         // find out if we are completing a property in the 'dependencies' object.
//         var textUntilPosition = model.getValueInRange({startLineNumber: 1, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column});
//         console.log(textUntilPosition)
//         var match = textUntilPosition.match(/"dependencies"\s*:\s*{\s*("[^"]*"\s*:\s*"[^"]*"\s*,\s*)*("[^"]*)?$/);
//         //if (match) {
//             //return createDependencyProposals();
//         //}
//         return [];
//     }
// });
// monaco.languages.registerFoldingRangeProvider('typescript', {
   
//     provideCodeActions: function(model, range) {
//         return [
//             {
//                 title: "action title"
//             }
//         ]
//     }
// });

var Snippets = {

}
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
        return [
          {
              label:'alert',
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText:{
                value:'dialog.alert("${1:提示文本}")'
              }
          },
          {
              label:'dialogOpen',
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText:{
                 value: `
var options = {
  url: "/std/xxxxx/xxxxxxx.aspx?mode=2",
  title: "这是一个弹出层示例",
  parameters:{mode:2, oid:'oid'},
  height: 600,
  width: 800,
  buttons: [
      {
          name: 'ok',
          primary: true,
          text: '确认',
          callback: function (e) {

          }
      },
      {
          text: '取消',
          name: 'cancel',
      }
  ]
};
dialog.open(options);
                 `
              }
          },
          {
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
  methods: {
    handleBlur (evt) {
      this.$emit('blur', evt)
    },
    handleChange (evt) {
      this.$emit('change', evt)
    },
    getValue () {
      return this.$refs.editor.getValue()
    },
    validate () {
      return this.$refs.editor.validate()
    }
  }
}
</script>
