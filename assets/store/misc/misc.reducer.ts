import miscState from "./misc.state";
import type from "./misc.type";
import {ActionTypes} from "./misc.action";

const reducer = (oldState:IMisc=miscState, actions:ActionTypes):IMisc => {
	if (actions.type === type.SET_SOCIAL_MEDIAS) {
		return {
			...oldState,
			socialMedias:actions.payload.data
		};
	}
	return oldState;
};

export default reducer;