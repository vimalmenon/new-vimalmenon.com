import {ApiCaller} from "utility"
import {api} from "model_admin";
import {IContentData} from "./index.d";

const {GetSuperAdminContents} = api;

export const init = () => {
	new ApiCaller<IContentData>(new GetSuperAdminContents)
		.getPromise()
		.then(console.log);

	return [];
};