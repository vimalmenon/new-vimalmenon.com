import type from "./session.type";

export const setSession =():IAction<{sesssion:any}> => {
	return {
		type : type.SET_SESSION,
		payload : {
			sesssion:null
		}
	};
};

export type actionTypes = IAction<{sesssion:any}>;