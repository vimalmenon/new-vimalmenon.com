import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import {
	ThemeProvider,
	createMuiTheme
} from "@material-ui/core/styles";

import loadable from "@loadable/component";

import {palette} from "model";

import User from "./user";
import { useSelector } from "react-redux";

const Admin = loadable(() => import( /* webpackChunkName: "admin" */ /* webpackMode: "lazy" */ "./admin"));

const Page:React.FC = () => {
	const type = useSelector<IState,ThemeType>((state) => state.config.themeType);
	const theme = createMuiTheme({
		palette : {
			...palette,
			type
		}
	});
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<Route path="/admin" component={Admin} />
					<Route path="/" component={User} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

export default Page;