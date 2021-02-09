import { METHODS , CONTENT_TYPE} from "../../const/enums";

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
	public setPath (paths:string[]):void {
		paths.unshift(this.url);
		this.url = paths.join("/");
	}
	public setName (name:string):void {
		this.name = name;
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
class ContentApi extends Api {
	constructor() {
		super("contentApi", METHODS.GET, "/api/content");
	}
}
class ReleaseApi extends ContentApi {
	constructor() {
		super();
		this.setName("releaseApi");
		this.setPath(["release"]);
	}
}

class ComponentEntitlements extends Api {
	constructor(data:IEntitlementRequest) {
		super("componentEntitlements", METHODS.POST, "/api/entitlements");
		this.setBody<IEntitlementRequest>(data);
	}
}

class LoginApi extends Api {
	constructor(data:ILoginRequest) {
		super("loginApi", METHODS.PUT, "/api/login");
		this.setBody<ILoginRequest>(data);
	}
}

class SuperAdminLinks extends Api {
	constructor () {
		super("superAdminLinks", METHODS.GET, "/api/admin/super/links");
	}
}

class AboutMeApi extends ContentApi {
	constructor(isShort?:boolean) {
		super();
		this.setName("aboutMeApi");
		if (isShort) {
			this.setPath(["about-me", CONTENT_TYPE.SHORT]);
		} else {
			this.setPath(["about-me"]);
		}
	}
}

export default {
	MainApi,
	LoginApi,
	AboutMeApi,
	ReleaseApi,
	ContactApi,
	SuperAdminLinks,
	PrivacyPolicyApi,
	ComponentEntitlements
};