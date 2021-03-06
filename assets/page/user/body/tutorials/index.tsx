import React from "react";

import {
	makeStyles,
	createStyles,
	Theme
} from "@material-ui/core/styles";
import {page, pageConfig} from "model";
import {Container, PageTitle, YTPlayer} from "component";
const {xl} = pageConfig.common.youTube;

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection:"column"
		},
		title:{
			display: "flex",
		},
		content:{
			display: "flex",
			flexDirection:"column"
		},
		tutorialsContainer : {
			display:"flex",
			flexDirection:"column",
			margin:theme.spacing(1,0),
			"&:not(:last-child)":{
				borderBottom:"1px solid gray"
			}
		},
		tutorialsTitle : {
			display:"flex",
			fontSize:"1.5em"
		},
		tutorialsContent : {
			display:"flex",
			flexWrap:"wrap",
		},
		tutorialContainer : {
			display:"flex",
			flexDirection:"column",
			margin:theme.spacing(2),
			[theme.breakpoints.down("md")]: {
				flexDirection:"column",
				flex:"1 1 100%",
			},
		},
		tutorialPlayerContainer : {
			display:"flex",
			justifyContent:"center"
		},
		tutorialPlayer : {
			display:"flex",
			height:xl.small.height,
			width:xl.small.width,
			[theme.breakpoints.down("xs")]: {
				width:"100%",
			},
		},
		tutorialDescription : {
			display:"flex",
			justifyContent:"space-between",
			fontSize:"1.2em",
			margin:theme.spacing(1,0),
			alignItems:"center"
		},
		publishedDate: {
			fontSize:"0.8em"
		}
	});
});
const {full} = page.tutorials;

const Tutorials:React.FC = () => {
	const classes = useStyles();
	return (
		<Container dark={false}>
			<div className={classes.root}>
				<div className={classes.title}>
					<PageTitle title={"Tutorials"} />
				</div>
				<div className={classes.content}>
					{full.map((tutorial, key) => {
						return (
							<div key={key} className={classes.tutorialsContainer}>
								<div className={classes.tutorialsTitle}>
									{tutorial.title}
								</div>
								<div className={classes.tutorialsContent}>
									{tutorial.videos.map((video, innerKey) => {
										return (
											<div key={innerKey} className={classes.tutorialContainer}>
												<div className={classes.tutorialPlayerContainer}>
													<YTPlayer 
														videoId={video.videoId} 
														videoName={video.name} 
														className={classes.tutorialPlayer}/>
												</div>
												<div className={classes.tutorialDescription}>
													<span>
														{video.name}
													</span>
													<span className={classes.publishedDate}>
														{video.publishedDate}
													</span>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</Container>
	);
};

export default Tutorials;