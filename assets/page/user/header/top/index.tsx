import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
			flex: "0 0 63px",
			background : "#00172B",
		},
	});
});

const Top:React.FC = () => {
	const classes = useStyles();
	return(
		<div className={classes.root}>
			
		</div>
	);
};

export default Top;