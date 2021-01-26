import {pendingTasksReducer} from "react-redux-spinner";

const reducer = (oldState=1, action:{type:string}):number => {
	return pendingTasksReducer(oldState,action);
};

export default reducer;