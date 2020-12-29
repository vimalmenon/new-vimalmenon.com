import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import {Container, PageTitle} from "component";
import {Element} from "react-scroll";


import Message from "./message";
import Video from "./video";

const useStyles = makeStyles(() => {
	return createStyles({
		element: {
			display: "flex",
			flexDirection:"column",
		},
		title : {
			display:"flex"
		},
		content : {
			display:"flex"
		},
		footer : {
			display:"flex"
		}
	});
});
const AboutUs:React.FC<{dark:boolean}> = ({dark}) => {
	const classes = useStyles();
	return (
		<Element name="about-me" className={classes.element}>
			<Container dark={dark}>
				<div className={classes.title}>
					<PageTitle title="About Me" />
				</div>
				<div className={classes.content}>
					<Video />
					<Message />
				</div>
				<div className={classes.footer}>

				</div>
			</Container>
		</Element>
	);
};

export default AboutUs;