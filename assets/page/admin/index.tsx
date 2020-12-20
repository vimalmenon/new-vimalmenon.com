import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {Entitlement} from "component";

import Login from "./login";
import Dashboard from "./dashboard";

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex"
		},
	});
});

const Admin:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Entitlement
				name="login"
				Component={Login} />
			<Entitlement
				name="dashboard"
				Component={Dashboard} />
		</div>
	);
};


export default Admin;