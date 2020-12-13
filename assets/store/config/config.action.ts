import type from "./config.type";

export const setLocation = (value:string):IAction<{currentLocation:string}> => {
    return {
        type:type.SET_LOCATION,
        payload:{
            currentLocation:value
        }
    };
};
export const toggleTheme = (value:ThemeType):IAction<{themeType:ThemeType}> => {
    return {
        type:type.TOGGLE_THEME_TYPE,
        payload:{
            themeType:value
        }
    };
};

export type actionTypes = IAction<{themeType:ThemeType, currentLocation:string}>;