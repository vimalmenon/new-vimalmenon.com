import React from "react";

import {Editor} from "component_admin";

import {init} from "./index.service";

import {IContent} from "./index.d";

const Content:React.FC = () => {
	React.useEffect(() => {
		init();
	}, []);
	// const [value, setValue] = React.useState<IContent>();
	return (
		<div>
			<Editor
				theme="dark"
				language="markdown"
				name="Content type"
				value={""}/>
		</div>
	);
};


export default Content;