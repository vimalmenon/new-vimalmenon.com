import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
	const spacing = 2;
	return createStyles({
		root: {
			display:"block",
			height:theme.spacing(spacing),
			width:theme.spacing(spacing),
			backgroundColor:"green",
			borderRadius:theme.spacing(spacing),
			margin:theme.spacing(0,1)
		},
	});
});

const Status:React.FC = () => {
	const classes = useStyles();
	return (
		<span className={classes.root}>
		</span>
	);
};

export default Status;