import * as monaco from 'monaco-editor'
import Utility from './javascript/utility/utility.ts'
import Message from './javascript/utility/message.ts'
import ApiAppForm from './api/appform.ts'

monaco.languages.typescript.typescriptDefaults.addExtraLib(Utility, 'javascript/utility/utility.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(Message, 'javascript/utility/message.ts');

monaco.languages.typescript.typescriptDefaults.addExtraLib(ApiAppForm, 'api/appform.ts');
