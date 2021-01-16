import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {
	Route,
	Switch,
} from "react-router-dom";

import Home from "./home";
import Tutorials from "./tutorials";
import PageNotFound from "./page-not-found";
import Release from "./release";
import PrivacyPolicy from "./privacy-policy";
import Announcements from "./announcements";
import AboutMe from "./about-me";

const useStyles = makeStyles(() => {
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
				<Route exact path="/tutorials" component={Tutorials} />
				<Route exact path="/release" component={Release} />
				<Route exact path="/privacy-policy" component={PrivacyPolicy} />
				<Route exact path="/announcements" component={Announcements} />
				<Route exact path="/about-me" component={AboutMe} />
				<Route component={PageNotFound} />
			</Switch>
		</section>
	);
};

export default Body;