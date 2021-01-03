import type from "./session.type";

export const setSession = (session:ISessionState):IAction<{session:ISessionState}> => {
	return {
		type : type.SET_SESSION,
		payload : {
			session
		}
	};
};

export type actionTypes = IAction<{sesssion?:ISessionState}>;