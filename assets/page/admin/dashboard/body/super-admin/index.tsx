import React from "react";
import {
	Route,
	Switch,
	useRouteMatch,
} from "react-router-dom";


import Admin from "./admin";
import Content from "./content";
import Other from "./other";

const SuperAdmin:React.FC = () => {
	const match = useRouteMatch();
	return (
		<Switch>
			<Route exact path={`${match.url}`} component={Admin} />
			<Route path={`${match.url}/content`} component={Content} />
			<Route path={`${match.url}/other`} component={Other} />
		</Switch>
	);
};


export default SuperAdmin;