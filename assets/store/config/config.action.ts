import type from "./config.type";

export const setLocation = (value:string):IAction<{currentLocation:string}> => {
	return {
		type:type.SET_LOCATION,
		payload:{
			currentLocation:value
		}
	};
};
export const setTheme:IReturnOneParamMethod<ThemeType,IAction<{themeType:ThemeType}>> = (themeType) => {
	return {
		type:type.SET_THEME_TYPE,
		payload:{
			themeType
		}
	};
};
export const setLoading:IReturnOneParamMethod<boolean,IAction<{loading:boolean}>> = (loading) => {
	return {
		type:type.SET_LOADING,
		payload : {
			loading
		}
	}
};

export type actionTypes = IAction<{themeType:ThemeType, currentLocation:string, loading:boolean}>;