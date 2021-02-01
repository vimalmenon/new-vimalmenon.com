import type from "./pending-task.type";

import {
	pendingTask,
	begin, 
	end
} from "react-redux-spinner";

export const startLoading = ():{type:string;[x:string]:string;} => {
	return {
		type:type.START_LOADING,
		[pendingTask]:begin
	};
};

export const stopLoading = ():{type:string;[x:string]:string;} => {
	return {
		type:type.STOP_LOADING,
		[pendingTask]:end
	};
};