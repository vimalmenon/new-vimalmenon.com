import React from "react";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

import "ace-builds/webpack-resolver";

const Content:React.FC = () => {
	const [value, setValue] = React.useState<string>();
	return (
		<div>
			<AceEditor
				mode="json"
				theme="twilight"
				onChange={(newValue) => setValue(newValue)}
				name="Content type"
				defaultValue={value}
				editorProps={{ $blockScrolling: true }}
				setOptions={{
					enableBasicAutocompletion: true,
					enableLiveAutocompletion: true,
					enableSnippets: true
				}}/>
		</div>
	);
};


export default Content;