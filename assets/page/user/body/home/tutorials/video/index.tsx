import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
	return createStyles({
		root:{
			display:"flex"
		}
	});
});

const Video:React.FC<{videoId:string}> = ({videoId}) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{videoId}
		</div>
	);
};

export default Video;