import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {APP_VERSION} from "const";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			color: "white",
			flex: "0 0 63px",
			background: theme.palette.type==="light"?"#001B34":"#222323",
		},
	});
});
const Bottom:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{APP_VERSION}
			This is bottom
		</div>
	);
};

export default Bottom;