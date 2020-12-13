import session from "./session.state";

const reducer = (oldState=session, action):ISession => {
	return oldState;
};

export default reducer;