import React from "react";
import {Helmet} from "react-helmet";
import { useSelector } from "react-redux";

import {navigation} from "service";

const MetaData:React.FC = () => {
	const location = useSelector<IState, string|null>((state) => state.config.currentLocation);
	if (location) {
		const data = navigation.getMetaDataFromUrl(location);
		return (
			<Helmet>
				<title>{data?.title}</title>
			</Helmet>
		);
	}
	return null;
};

export default MetaData;