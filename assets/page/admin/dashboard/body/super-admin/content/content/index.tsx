import React from "react";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"

const Content:React.FC = () => {
	const onChange = (newValue) => {
		console.log("change", newValue);
	}
	return (
		<div>
			<AceEditor
				mode="java"
				theme="github"
				onChange={onChange}
				name="Content type"
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