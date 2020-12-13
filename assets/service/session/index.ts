import store from "store";

const setSession = ():void => {
	const session = store.getState().session;
	console.log(session);
};

export default {
	setSession
};