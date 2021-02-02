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
	public setBody<T>(data:T):void {
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

class ContactApi extends Api {
	constructor() {
		super("contactApi", METHODS.GET, "/api/content/contact");
	}
}

class ReleaseApi extends Api {
	constructor() {
		super("releaseApi", METHODS.GET, "/api/content/release");
	}
}

class ComponentEntitlements<T> extends Api {
	constructor(data:T) {
		super("componentEntitlements", METHODS.POST, "/api/entitlements");
		this.setBody<T>(data);
	}
}


export default {
	MainApi,
	ContactApi,
	ReleaseApi,
	PrivacyPolicyApi,
	ComponentEntitlements
};