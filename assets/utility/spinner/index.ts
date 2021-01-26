import store from "store";
import {pendingTask} from "action";

const startSpinner:IVoidNoParamMethod = () => {
	store.dispatch(pendingTask.startLoading());
};

const stopSpinner:IVoidNoParamMethod = () => {
	store.dispatch(pendingTask.stopLoading());
};

export default {
	startSpinner,
	stopSpinner
};