"use client"

import CodeMirror from '@uiw/react-codemirror'
import {vscodeLight} from "@uiw/codemirror-theme-vscode"
import {javascript} from "@codemirror/lang-javascript"

interface CodeEditorProps {
  code: string
  onChange: (value: string)=>void
}

const CodeEditor = ({code, onChange}:CodeEditorProps) => {
  return (
    <div>
      <CodeMirror
        value={code}
        theme={vscodeLight}
        extensions={[javascript()]}
        style={{fontSize:16}}
        height='500px'
        onChange={onChange}
      />
    </div>
  )
}

export default CodeEditor