import React from "react";
import {Helmet} from "react-helmet";
import { useSelector } from "react-redux";

const MetaData:React.FC = () => {
	const location = useSelector<IState, string|null>((state) => state.config.currentLocation);
	console.log(location);
	return (
		<Helmet>
			
		</Helmet>
	);
};

export default MetaData;