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
const Bottom:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			This is bottom
		</div>
	);
};

export default Bottom;