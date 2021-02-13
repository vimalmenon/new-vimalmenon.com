import React from "react";

import {api} from "model_admin";
import {ApiCaller} from "utility";

const {GetSuperAdminTutorials} = api;

const Tutorial:React.FC = () => {
	React.useEffect(() => {
		new ApiCaller(new GetSuperAdminTutorials())
			.getPromise()
			.then(console.log);
	}, []);
	return (
		<div>
			this is tutorials
		</div>
	);
};

export default Tutorial;