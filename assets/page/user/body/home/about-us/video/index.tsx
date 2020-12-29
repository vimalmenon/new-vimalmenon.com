import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
	return createStyles({
		root : {
			display:"flex",
			flex: "1 1 50%",
			flexDirection:"column"
		}
	});
});
const Video:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>

		</div>
	);
};

export default Video;