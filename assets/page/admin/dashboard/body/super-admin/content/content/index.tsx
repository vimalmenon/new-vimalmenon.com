import React from "react";

import {Editor} from "component_admin";

import {init} from "./index.service";

const Content:React.FC = () => {
	React.useEffect(() => {
		init();
	}, []);
	const [value, setValue] = React.useState<string>("");
	return (
		<div>
			<Editor
				theme="dark"
				language="markdown"
				onChange={(newValue) => setValue(newValue)}
				name="Content type"
				value={value}/>
		</div>
	);
};


export default Content;