import type from "./config.type";

export const setLocation = (value:string):IAction<{currentLocation:string}> => {
	return {
		type:type.SET_LOCATION,
		payload:{
			currentLocation:value
		}
	};
};
export const toggleTheme = ():IAction<null> => {
	return {
		type:type.TOGGLE_THEME_TYPE,
		payload:null
	};
};
export const setTheme = (themeType:ThemeType):IAction<{themeType:ThemeType}> => {
	return {
		type:type.SET_THEME_TYPE,
		payload:{
			themeType
		}
	};
};

export type actionTypes = IAction<{themeType:ThemeType, currentLocation:string}>;