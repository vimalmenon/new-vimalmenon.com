import { combineReducers } from "redux";
import session from "./session/session.reducer";


const reducer = combineReducers<IState>({
	session
});

export default reducer;