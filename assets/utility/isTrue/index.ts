const isTrue = (value) => {
	if(value === undefined) return false;
	if(value === null) return false;
	return true;
};

export default isTrue;