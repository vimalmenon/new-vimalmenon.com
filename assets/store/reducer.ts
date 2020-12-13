import { combineReducers } from "redux";

import session from "./session/session.reducer";
import config from "./config/config.reducer";

const reducer = combineReducers<IState>({
	session,
	config
});

export default reducer;