import React from "react";
import {IEditorProps} from "./index.d";

import AceEditor from "react-ace";
import {themeSelector} from "./index.service";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/webpack-resolver";


const Editor:React.FC<IEditorProps> = ({theme="dark", language="markdown", value, name, onChange, className}) => {
	return (
		<AceEditor
			mode={language}
			theme={themeSelector(theme)}
			onChange={onChange}
			name={name}
			defaultValue={value}
			width="100%"
			editorProps={{ $blockScrolling: true }}
			className={className}
			setOptions={{
				enableBasicAutocompletion: true,
				enableLiveAutocompletion: true,
				enableSnippets: true
			}}/>
	);
};

export default Editor;