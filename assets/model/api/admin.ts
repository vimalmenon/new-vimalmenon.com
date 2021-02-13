import {Api} from "./index";
import { METHODS } from "../../const/enums";

class GetSuperAdminLinks extends Api {
	constructor () {
		super("superAdminLinks", METHODS.GET, "/api/admin/super/links");
	}
}

class SaveSuperAdminLinks extends Api {
	constructor (data:ILinkReponse) {
		super("saveSuperAdminLinks", METHODS.PUT, "/api/admin/super/links");
		this.setBody<ILinkReponse>(data);
	}
}

class GetSuperAdminContents extends Api {
	constructor () {
		super("getSuperAdminContents", METHODS.GET, "/api/admin/super/content");
	}
}

export default {
	GetSuperAdminLinks,
	SaveSuperAdminLinks,
	GetSuperAdminContents
};