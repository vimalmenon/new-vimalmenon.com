import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./header";
import Sidebar from "./sidebar";
import Body from "./body";

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
			minHeight: "100%"
		},
	});
});

const Dashboard:React.FC = () => {
	const classes = useStyles();
	return(
		<section className={classes.root}>
			<CssBaseline />
			<Header />
			<Sidebar />
			<Body />
		</section>
	);
};
export default Dashboard;