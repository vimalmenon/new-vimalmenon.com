import session from "./session/session.state";
import config from "./config/config.state";
import admin from "./admin/admin.state";

const state:IState = {
	session,
	config,
	admin
};

export default state;