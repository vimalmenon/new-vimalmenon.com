import type from "./session.type";
import session from "./session.state";

import {actionTypes} from "./session.action";

const reducer = (oldState=session, action:actionTypes):ISession => {
	if (action.type === type.SET_SESSION) {
		return {
			...action.payload
		};
	} else {
		return oldState;
	}
};

export default reducer;