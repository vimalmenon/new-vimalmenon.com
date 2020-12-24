const clipBoard = (value) => {
	return navigator.clipboard.writeText(value);
};

export default clipBoard;