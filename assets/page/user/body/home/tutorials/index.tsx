import React from "react";

import {Container, PageTitle} from "component";
import {Element} from "react-scroll";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {page} from "model";

import Video from "./video";

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
		}
	});
});
const Tutorials:React.FC<{dark:boolean}> = ({dark}) => {
	const classes = useStyles();
	const tutorials = page.tutorials;
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
										if(innerKey<3) {
											return (
												<div key={innerKey}>
													<div>
														<Video videoId={video.videoId}/>
													</div>
													<div>
														{video.name}
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
			</Container>
		</Element>
	);
};

export default Tutorials;