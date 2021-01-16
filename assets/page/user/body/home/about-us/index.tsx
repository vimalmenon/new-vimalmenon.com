import React from "react";

import {
	makeStyles,
	createStyles,
	Theme
} from "@material-ui/core/styles";
import {Container, PageTitle, ReadMore} from "component";
import {Element} from "react-scroll";


import Message from "./message";
import Video from "./video";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		element: {
			display: "flex",
			flexDirection:"column",
		},
		title : {
			display:"flex"
		},
		content : {
			display:"flex",
			[theme.breakpoints.down("sm")]: {
				flexDirection:"column",
			},
		},
		footer : {
			display:"flex",
			justifyContent:"flex-end"
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
					<ReadMore text="Read More" onReadMore={() =>console.log("this is clciked")} />
				</div>
			</Container>
		</Element>
	);
};

export default AboutUs;