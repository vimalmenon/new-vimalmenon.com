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

const Release:React.FC = () => {
	const classes = useStyles();
	return(
		<div className={classes.root}>
		</div>
	);
};

export default Release;