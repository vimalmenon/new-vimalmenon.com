import { METHODS } from "enums";



export class Api implements IApi{
	public name;
	public method;
	public url;
	public body;
	public headers;
	constructor (name: string, method: METHODS, url: string) {
		this.name = name;
		this.method = method;
		this.url = url;
	}
	public setApiData<T>(data:T):void {
		this.body = JSON.stringify(data);
	}
}

class MainApi extends Api {
	constructor() {
		super("api", METHODS.GET, "/api");
	}
}

class PrivacyPolicyApi extends Api {
	constructor() {
		super("privacyPolicyApi", METHODS.GET, "/api/content/privacy-policy");
	}
}


export default {
	MainApi,
	PrivacyPolicyApi
};