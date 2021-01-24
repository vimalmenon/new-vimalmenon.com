import {pendingTasksReducer} from "react-redux-spinner";

const reducer = (oldState=1, action:{type:string}):number => {
	console.log(oldState, action);
	return pendingTasksReducer(oldState,action);
};

export default reducer;