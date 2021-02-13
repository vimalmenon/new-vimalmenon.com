import {ApiCaller} from "utility"
import {api} from "model_admin";
import {IContent} from "./index.d";
import React from "react";

const {GetSuperAdminContents} = api;

const callApi = (setData) => {
	new ApiCaller<IContent[]>(new GetSuperAdminContents)
		.getPromise()
		.then(setData);
}
export const useInitData = () => {
	const [data, setData] = React.useState<IContent[]>()
	React.useEffect(() => {
		callApi(setData);
	}, []);
	const refresh = () => {
		callApi(setData)
	}
	return {refresh, data};
};