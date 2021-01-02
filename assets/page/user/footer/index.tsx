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
			flexDirection: "column"
		},
	});
});
const Footer:React.FC = () => {
	const classes = useStyles();
	return(
		<footer className={classes.root}>
			<Top />
			<Bottom />
		</footer>
	);
};

export default Footer;