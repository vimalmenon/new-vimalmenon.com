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

import Home from "./home";
import PageNotFound from "./page-not-found";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display:"flex",
			flexDirection:"column",
			flex:"1 1 auto"
		},
	});
});

const Body:React.FC = () => {
	const classes = useStyles();
	return(
		<section className={classes.root}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route component={PageNotFound} />
			</Switch>
		</section>
	);
};

export default Body;