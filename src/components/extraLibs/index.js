import * as monaco from 'monaco-editor'
import Utility from './javascript/utility/utility.ts'
import Message from './javascript/utility/message.ts'
import MapControl from './javascript/utility/mapcontrol.ts'
import Dialog from './javascript/dialog/dialog.ts'

import ApiAppForm from './api/appform.ts'
import Global from './global/index.ts'

monaco.languages.typescript.typescriptDefaults.addExtraLib(Utility, 'utility/utility.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(Message, 'utility/message.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(MapControl, 'utility/mapcontrol.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(Dialog, 'dialog/dialog.ts');

monaco.languages.typescript.typescriptDefaults.addExtraLib(ApiAppForm, 'api/appform.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(Global, 'global');
