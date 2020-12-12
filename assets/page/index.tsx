import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import loadable from "@loadable/component";


import User from "./user";
const Admin = loadable(() => import( /* webpackChunkName: "admin" */ /* webpackMode: "lazy" */ "./admin"));

const Page:React.FC = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/admin" component={Admin} />
					<Route path="/" component={User} />
				</Switch>
			</Router>
		</div>
	);
};

export default Page;