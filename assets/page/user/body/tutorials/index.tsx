import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import {page} from "model";
import {Container, YTPlayer} from "component";

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection:"column"
		},
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
						<div key={key}>
							<div>
								{tutorial.title}
							</div>
							<div>
								{tutorial.videos.map((video, innerKey) => {
									return (
										<div key={innerKey}>
											<div>
												<YTPlayer 
													videoId={video.videoId} 
													videoName={video.name} 
													className={""}/>
											</div>
											<div>
												{video.name}
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