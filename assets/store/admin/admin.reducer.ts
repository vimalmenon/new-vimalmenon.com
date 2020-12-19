import admin from "./admin.state";

const reducer = (oldState=admin, actions):IAdmin => {
	switch(actions.type) {
	default:
		return oldState;
	}
};

export default reducer;