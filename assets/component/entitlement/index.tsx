import React from "react";

const Entitlement:React.FC<IEntitlement<React.FunctionComponent>> = ({name, Component}) => {
	const [show, setShow] = React.useState<boolean>(false)
	React.useEffect(() => {
		setShow(name==="login");
	});
	console.log(show, name);
	if (show) {
		return (<Component />)
	} 
	return null;
};

export default Entitlement;