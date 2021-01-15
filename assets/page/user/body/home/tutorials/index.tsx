import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {Element} from "react-scroll";
import { useHistory } from "react-router-dom";


import {Container, PageTitle, YTPlayer} from "component";
import {page, pageConfig, icon} from "model";

const {xl} = pageConfig.common.youTube.small;

const tutorials = page.tutorials;
const {View} = icon;

const useStyles = makeStyles((theme:Theme) => {
	
	return createStyles({
		element: {
			display: "flex",
			flexDirection:"column",
		},
		title : {
			display: "flex",
		},
		content : {
			display: "flex",
			flexDirection:"column",	
		},
		footer : {
			display:"flex",
			justifyContent:"flex-end"
		},
		footerText : {
			cursor:"pointer",
			"& svg":{
				marginBottom:"-4px",
				fontSize:"20px"
			},
			"& span": {
				padding:"7px"
			},
		},
		contentItem :{
			display:"flex",
			margin:theme.spacing(2,0),
			flexDirection:"column"
		},
		contentTitle: {
			fontSize:"2em",
			margin:theme.spacing(1,0),
		},
		contentVideos :{
			display:"flex",
			[theme.breakpoints.down("md")]: {
				flexDirection:"column",
			},
		},
		contentVideo :{
			display:"flex",
			flexDirection:"column",
			flex:"1 1 50%",
			margin:theme.spacing(1),
		},
		videoDetail :{
			display:"flex",
			justifyContent:"space-between",
			margin:theme.spacing(1,0)
		},
		youTubePlayerContainer: {
			display:"flex",
			justifyContent:"center"
		},
		youTubePlayer : {
			height:xl.height,
			width:xl.width,
			[theme.breakpoints.down("xs")]: {
				width:"100%",
			},
		}
	});
});
const Tutorials:React.FC<{dark:boolean}> = ({dark}) => {
	const classes = useStyles();
	const {push} = useHistory();
	const onViewAll = () => push("/tutorials");
	return (
		<Element name="tutorials" className={classes.element}>
			<Container dark={dark}>
				<div className={classes.title}>
					<PageTitle title="Tutorials" />
				</div>
				<div className={classes.content}>
					{tutorials.map((tutorial, key) => {
						return (
							<div key={key} className={classes.contentItem}>
								<div className={classes.contentTitle}>
									{tutorial.title}
								</div>
								<div className={classes.contentVideos}>
									{tutorial.videos.map((video, innerKey) => {
										if(innerKey<2) {
											return (
												<div key={innerKey} className={classes.contentVideo}>
													<div className={classes.youTubePlayerContainer}>
														<YTPlayer videoId={video.videoId} videoName={video.name} className={classes.youTubePlayer}/>
													</div>
													<div className={classes.videoDetail}>
														<span>
															{video.name}
														</span>
														<span>
															{video.publishedDate}
														</span>
													</div>
												</div>
											);
										}
									})}
								</div>
							</div>
						);
					})}
				</div>
				<div className={classes.footer}>
					<span className={classes.footerText} onClick={onViewAll}>
						<View />
						<span>
							View all 
						</span>
					</span>
				</div>
			</Container>
		</Element>
	);
};

export default Tutorials;