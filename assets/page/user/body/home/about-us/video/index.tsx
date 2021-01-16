import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {YTPlayer} from "component";

import {page, pageConfig} from "model";

const {xl, xs} = pageConfig.common.youTube;

const useStyles = makeStyles((theme:Theme) => {	
	return createStyles({
		root : {
			display:"flex",
			flex: "1 1 50%",
			padding:theme.spacing(2),
			justifyContent:"center"
		},
		youTubePlayer : {
			display:"flex",
			height:xl.small.height,
			width:xl.small.width,
			[theme.breakpoints.down("xs")]: {
				width:xs.small.width,
			},
		}
	});
});
const Video:React.FC = () => {
	const classes = useStyles();
	const {aboutMe} = page.home;
	return (
		<div className={classes.root}>
			<YTPlayer 
				videoId={aboutMe.videoId} 
				videoName={aboutMe.title} 
				className={classes.youTubePlayer}/>
		</div>
	);
};

export default Video;