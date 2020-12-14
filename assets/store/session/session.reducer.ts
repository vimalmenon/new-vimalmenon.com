import type from "./session.types";
import session from "./session.state";

const reducer = (oldState=session, action):ISession => {
	if (action.type === type.SET_SESSION) {
		return {
			...action.payload
		};
	} else {
		return oldState;
	}
};

export default reducer;