import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import Top from "./top";
import Bottom from "./bottom";

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column",
			position:"relative",
			zIndex:20
		},
	});
});
const Header:React.FC = () => {
	const classes = useStyles();
	return (
		<header className={classes.root}>
			<Top />
			<Bottom />
		</header>
	);
};

export default Header;