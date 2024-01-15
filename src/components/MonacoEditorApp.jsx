// import * as monaco from 'monaco-editor';
import MonacoEditor from 'react-monaco-editor';

function MonacoEditorApp() {

   return(<>
        Monaco Editor
        <div>
            <MonacoEditor
                width="800"
                height="600"
                language="javascript"
                theme="vs-dark"
                value={"code"}
                options={"options"}
            />
        </div>
    </>)
}

export default MonacoEditor;