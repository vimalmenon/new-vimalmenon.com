import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
	return createStyles({
		root :{
			display: "flex",
			flex:"1 1 50%"
		}
	});
});

const Message:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			Comming Soon
		</div>
	);
};

export default Message;