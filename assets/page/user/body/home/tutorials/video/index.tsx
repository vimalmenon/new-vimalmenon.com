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
	const {host} = location;
	return (
		<div className={classes.root}>
			<iframe title="My Daily Marathon Tracker" id="ytplayer" width="100%" height="360"
				src={`https://www.youtube.com/embed/${videoId}?origin=${host}`}
				frameBorder="0"></iframe>
		</div>
	);
};

export default Video;