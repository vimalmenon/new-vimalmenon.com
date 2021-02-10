import React from "react";

import AceEditor from "react-ace";

import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";



const Content:React.FC = () => {
	const onChange = (newValue) => {
		console.log("change", newValue);
	};
	React.useEffect(() => {
		console.log("this is working")
	}, []);
	return (
		<div>
			<AceEditor
				mode="javascript"
				theme="twilight"
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