import React from "react";

import {
	makeStyles,
	createStyles,
	Theme
} from "@material-ui/core/styles";
import {page, others} from "model";
import {Container, YTPlayer} from "component";
const {small} = others.yTPlayerSizes;

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
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
			dislay:"flex",
			flexDirection:"column",
			margin:theme.spacing(2)
		},
		tutorialPlayerContainer : {
			display:"flex"
		},
		tutorialPlayer : {
			display:"flex",
			height:small.xl.height,
			width:small.xl.width
		},
		tutorialDescription : {
			display:"flex",
			justifyContent:"space-between"
		}
	});
});
const {tutorials} = page;

const Tutorials:React.FC = () => {
	const classes = useStyles();
	return (
		<Container dark={false}>
			<div className={classes.root}>
				{tutorials.map((tutorial, key) => {
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
												<span>
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
		</Container>
	);
};

export default Tutorials;