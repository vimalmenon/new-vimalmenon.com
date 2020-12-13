import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column",
			backgroundColor: theme.palette.background.paper,
			color: theme.palette.text.primary,
		},
	});
});

import {MetaData} from "component";

const User:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline />
			<MetaData />
			Website comming soon...
		</div>
	);
};


export default User;