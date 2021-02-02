import admin from "./admin.state";

import {actionTypes} from "./admin.action";
import type from "./admin.type";

const reducer = (oldState=admin, actions:actionTypes):IAdmin => {
	switch(actions.type) {
	case type.SET_IS_SIDEBAR_OPEN:
		return {
			...oldState,
			isSidebarOpen:actions.payload.isSidebarOpen
		};
	default:
		return oldState;
	}
};

export default reducer;