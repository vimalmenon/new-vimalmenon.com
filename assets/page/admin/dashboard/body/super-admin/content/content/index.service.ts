import {ApiCaller} from "utility"
import {api} from "model_admin";

const {GetSuperAdminContents} = api;

export const init = () => {
	new ApiCaller(new GetSuperAdminContents)
		.getPromise()
		.then(console.log);
};