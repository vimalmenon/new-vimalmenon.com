import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

import {
	Route,
	Switch,
	useRouteMatch,
} from "react-router-dom";

import SuperAdmin from "./super-admin";
import Home from "./home";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			position:"relative",
			display: "flex",
			top:"64px",
			minHeight:`100vh`,
			flex:"1 1 100%",
			margin:theme.spacing(2)
		}
	});
});

const Body:React.FC = () => {
	const classes = useStyles();
	const match = useRouteMatch();
	return (
		<section className={classes.root}>
			<Switch>
				<Route exact path={`${match.url}`} component={Home} />
				<Route path={`${match.url}/super_admin`} component={SuperAdmin} />
			</Switch>
		</section>
	);
};

export default Body;