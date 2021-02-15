import React from "react";

import {api} from "model_admin";
import {ApiCaller} from "utility";

import {ITutorial} from "./index.d";

const {GetSuperAdminTutorials} = api;

export const useInitData = () => {
	const [tutorials, setTutorials] = React.useState<ITutorial[]>([]);
	React.useEffect(() => {
		new ApiCaller<ITutorial[]>(new GetSuperAdminTutorials())
			.getPromise()
			.then(setTutorials); 
	},[]);
	return [tutorials];
};