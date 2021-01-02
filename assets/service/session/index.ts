import store from "store";

const setSession = ():void => {
	store.getState().session;
};

export default {
	setSession
};