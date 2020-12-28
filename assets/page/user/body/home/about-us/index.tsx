import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import {Container, PageTitle} from "component";
import {Element} from "react-scroll";

import {page} from "model";

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

		}
	});
});
const AboutUs:React.FC<{dark:boolean}> = ({dark}) => {
	const classes = useStyles();
	const aboutMe = page.aboutMe;
	return (
		<Element name="about-me" className={classes.element}>
			<Container dark={dark}>
				<div className={classes.title}>
					<PageTitle title="About Me" />
				</div>
				<div className={classes.content}>
					<div></div>
					<div>
						{aboutMe.description.map((value, key) => {
							return (
								<div key={key}>
									{value}
								</div>
							);
						})}
					</div>
				</div>
			</Container>
		</Element>
	);
};

export default AboutUs;