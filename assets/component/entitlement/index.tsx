import React from "react";

const Entitlement:React.FC<IEntitlement<React.FunctionComponent>> = ({name, Component}) => {
	const [show, setShow] = React.useState<boolean>(false);
	React.useEffect(() => {
		setShow(name !=="login");
	});
	if (show) {
		return (<Component />);
	}
	return null;
};

export default Entitlement;