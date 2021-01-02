import session from "./session/session.state";
import config from "./config/config.state";
import admin from "./admin/admin.state";
import misc from "./misc/misc.state";

const state:IState = {
	session,
	config,
	admin,
	misc
};

export default state;