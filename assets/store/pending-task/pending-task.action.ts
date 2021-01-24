import type from "./pending-task.type";

import {
	pendingTask,
	begin, 
	end
} from "react-redux-spinner";

export const startLoading = () => {
	return {
		type:type.START_LOADING,
		[pendingTask]:begin
	};
};

export const stopLoading = () => {
	return {
		type:type.STOP_LOADING,
		[pendingTask]:end
	};
};