import React from "react";
import {IEditorProps} from "./index.d";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

import "ace-builds/webpack-resolver";

const Editor:React.FC<IEditorProps> = ({theme="dark", language="markdown", value}) => {
	return (
		<AceEditor
			mode={language}
			theme="twilight"
			onChange={(newValue) => console.log(newValue)}
			name="Content type"
			defaultValue={value}
			editorProps={{ $blockScrolling: true }}
			setOptions={{
				enableBasicAutocompletion: true,
				enableLiveAutocompletion: true,
				enableSnippets: true
			}}/>
	);
};

export default Editor;