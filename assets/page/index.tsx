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
import { useSelector } from "react-redux";

import {palette} from "model";

import User from "./user";
const Admin = loadable(() => import( /* webpackChunkName: "admin" */ /* webpackMode: "lazy" */ "./admin"));


import {Loading} from "component";
import {init} from "./index.service";

import {Spinner} from "react-redux-spinner";

const Page:React.FC = () => {
	const config = useSelector<IState, IConfig>((state) => state.config);
	const {loading, themeType} = config;
	const theme = createMuiTheme({
		palette : {
			...palette,
			type:themeType
		}
	});
	React.useEffect(init,[]);
	return (
		<ThemeProvider theme={theme}>
			{loading? 
				<Loading />	:
				<Router>
					<Switch>
						<Route path="/admin" component={Admin} />
						<Route path="/" component={User} />
					</Switch>
				</Router>
			}
			<Spinner config={{}}/>
		</ThemeProvider>
	);
};

export default Page;