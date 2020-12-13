import config from "./config.state";
import type from "./config.type";
import {actionTypes} from "./config.action";

const reducer = (oldState:IConfig=config, actions:actionTypes):IConfig => {
	switch(actions.type){
	case type.TOGGLE_THEME_TYPE:
		return {
			...oldState,
			themeType: (actions.payload.themeType ==="light")?"dark":"light"
		};
	case type.SET_LOCATION:
		return {
			...oldState,
			currentLocation: actions.payload.currentLocation
		};
	default:
		return oldState;
	}
};

export default reducer;