import { combineReducers } from "redux";

import session from "./session/session.reducer";
import config from "./config/config.reducer";
import admin from "./admin/admin.reducer";
import misc from "./misc/misc.reducer";
import pendingTasks from "./pending-task/pending-task.reducer";


const reducer = combineReducers<IState>({
	pendingTasks,
	session,
	config,
	admin,
	misc
});

export default reducer;