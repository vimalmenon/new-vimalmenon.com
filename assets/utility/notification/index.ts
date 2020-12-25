import React from "react";

let setMessage;

const useInit = ():{notifications:string} => {
	const [notifications, setNotifications] = React.useState<string>("");
	setMessage=setNotifications;
	return {notifications};
};
const addMessage = (msg:string) => {
	setMessage(msg);
};
const removeMessage = ():void => {
	setMessage(null);
};

export default {
	useInit,
	addMessage,
	removeMessage
};