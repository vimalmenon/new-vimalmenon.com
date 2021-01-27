import config from "./config.state";
import type from "./config.type";
import {actionTypes} from "./config.action";

const reducer = (oldState:IConfig=config, actions:actionTypes):IConfig => {
	switch(actions.type){
	case type.SET_THEME_TYPE:
		return {
			...oldState,
			themeType: actions.payload.themeType 
		};
	case type.SET_LOCATION:
		return {
			...oldState,
			currentLocation: actions.payload.currentLocation
		};
	case type.SET_LOADING:
		return {
			...oldState,
			loading:actions.payload.loading
		};
	default:
		return oldState;
	}
};

export default reducer;