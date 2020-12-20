import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {
	Route,
	Switch,
} from "react-router-dom";

import { envCheck } from "utility";
import {ComingSoon} from "component";

import Home from "./home";
import PageNotFound from "./page-not-found";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display:"flex",
			margin:theme.spacing(3,0)
		},
	});
});

const Body:React.FC = () => {
	const classes = useStyles();
	return(
		<section className={classes.root}>
			<Switch>
				<Route exact path="/" component={envCheck(Home)} />
				<Route path="/coming-soon" component={ComingSoon} />
				<Route component={PageNotFound} />
			</Switch>
		</section>
	);
};

export default Body;