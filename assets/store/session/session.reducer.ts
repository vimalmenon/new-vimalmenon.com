import session from "./session.state";

const reducer = (oldState=session, action):ISession => {
	console.log(oldState, action);
	return oldState;
};


export default reducer;