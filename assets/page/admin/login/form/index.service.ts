import {ApiCaller} from "utility";
import {api} from "model";

const {LoginApi} = api;

export const onFormSave:IVoidOneParamMethod<ILoginRequest> = (data) => {
	new ApiCaller(new LoginApi(data))
		.getPromise();
};

export const formValue = (credential, e) => {
	const {name, value} = e.target;
	return {
		...credential,
		[name]:value
	};
};