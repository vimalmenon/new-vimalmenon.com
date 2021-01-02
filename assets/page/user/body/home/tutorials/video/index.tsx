import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";




const useStyles = makeStyles(() => {
	return createStyles({
		root:{
			display:"flex",
			width:"100%"
		}
	});
});

const Video:React.FC<{videoId:string}> = ({videoId}) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<iframe id="ytplayer" width="100%" height="360"
				src={`https://www.youtube.com/embed/${videoId}?origin=http://example.com`}
				frameBorder="0"></iframe>
		</div>
	);
};

export default Video;