import admin from "./admin.state";

import {actionTypes} from "./admin.action";

const reducer = (oldState=admin, actions:actionTypes):IAdmin => {
	switch(actions.type) {
	default:
		return oldState;
	}
};

export default reducer;