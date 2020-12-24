import React from "react";

let setMessage;

const useInit = () => {
	const [notificatons, setNotifications] = React.useState(null);
	setMessage=setNotifications;
	return {notificatons};
};
const addMessage = (msg) => {
	setMessage(msg);
};
const removeMessage = () => {
	setMessage(null);
};

export default {
	useInit,
	addMessage,
	removeMessage
};