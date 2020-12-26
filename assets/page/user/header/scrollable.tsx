import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import Bottom from "./bottom";

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column",
			position:"fixed",
			width:"100%",
			top:"0px"
			//height:"0px"
		},
	});
});
const Scrollable:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Bottom />
		</div>
	);
};

export default Scrollable;