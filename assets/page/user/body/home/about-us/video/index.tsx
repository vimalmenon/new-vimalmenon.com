import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {YTPlayer} from "component";

import {page, others} from "model";

const useStyles = makeStyles((theme:Theme) => {
	const {xl} = others.yTPlayerSizes.small;
	return createStyles({
		root : {
			display:"flex",
			flex: "1 1 50%",
			flexDirection:"column",
			padding:theme.spacing(2)
		},
		youTubePlayer : {
			display:"flex",
			height:xl.height,
			width:xl.width,
			[theme.breakpoints.down("md")]: {
				width:"100%",
			},
		}
	});
});
const Video:React.FC = () => {
	const classes = useStyles();
	const {aboutMe} = page.home;
	return (
		<div className={classes.root}>
			<YTPlayer videoId={aboutMe.videoId} videoName={aboutMe.title} className={classes.youTubePlayer}/>
		</div>
	);
};

export default Video;