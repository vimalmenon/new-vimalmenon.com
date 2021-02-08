import {Api} from "./index";
import { METHODS } from "enums";

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

export default {
    GetSuperAdminLinks,
    SaveSuperAdminLinks
}