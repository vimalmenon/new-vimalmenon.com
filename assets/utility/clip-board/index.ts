const clipBoard:(value:string) => Promise<void> = (value) => {
	return navigator.clipboard.writeText(value);
};

export default clipBoard;