import React from "react";

let setMessage;

const useInit = () => {
	const [notificatons, setNotifications] = React.useState(null);
	setMessage=setNotifications;
	return {notificatons};
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