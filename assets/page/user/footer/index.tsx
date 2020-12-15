import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
		},
	});
});
const Footer:React.FC = () => {
	const classes = useStyles();
	return(
		<footer className={classes.root}>
			This is Footer
		</footer>
	);
};

export default Footer;