import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
			background:"black",
			color:"white"
		},
	});
});
const Header = () => {
	const classes = useStyles();
	return (
		<header className={classes.root}>
			this is header
		</header>
	)
};

export default Header;