import type from "./misc.type";

export const setSocialMedias = (data:ISocialMedia[]):IAction<{data:ISocialMedia[]}> => {
	return {
		type:type.SET_SOCIAL_MEDIAS,
		payload:{
			data
		}
	};
};

export type ActionTypes = IAction<{data:ISocialMedia[]}>;