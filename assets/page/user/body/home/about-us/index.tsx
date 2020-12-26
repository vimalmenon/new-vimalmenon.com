import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import {Container, PageTitle} from "component";
import {Element} from "react-scroll";


const useStyles = makeStyles(() => {
	return createStyles({
		element: {
			display: "flex",
			flexDirection:"column",
		},
	});
});
const AboutUs:React.FC<{dark:boolean}> = ({dark}) => {
	const classes = useStyles();
	return (
		<Element name="about-me" className={classes.element}>
			<Container dark={dark}>
				<PageTitle title="About Me" />
				<div>
					this is about us
				</div>
			</Container>
		</Element>
	);
};

export default AboutUs;