import React from "react";

import {Container, PageTitle} from "component";
import {Element} from "react-scroll";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {page} from "model";

const useStyles = makeStyles(() => {
	return createStyles({
		element: {
			display: "flex",
			flexDirection:"column",
		},
		title : {
			display: "flex",
		},
		content : {

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
							<div key={key}>
								<div>
									{tutorial.title}
								</div>
								<div>
									{tutorial.videos.map((video, innerKey) => {
										return (
											<div key={innerKey}>
												<div>
													{video.videoId}
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
		</Element>
	);
};

export default Tutorials;