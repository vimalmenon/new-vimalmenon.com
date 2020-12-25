import React from "react";

let setMessage;

const useInit = ():{notifications:string} => {
	const [notifications, setNotifications] = React.useState<string>("");
	setMessage=setNotifications;
	return {notifications};
};
const addMessage:IVoidOneParamMethod<string> = (msg) => {
	setMessage(msg);
};
const removeMessage:IVoidNoParamMethod = () => {
	setMessage(null);
};

export default {
	useInit,
	addMessage,
	removeMessage
};