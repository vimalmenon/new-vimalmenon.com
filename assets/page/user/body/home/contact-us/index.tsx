import React from "react";

import {Container, PageTitle} from "component";
import {Element} from "react-scroll";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";


const useStyles = makeStyles(() => {
	return createStyles({
		element: {
			display: "flex",
			flexDirection:"column",
		},
	});
});

const ContactUs:React.FC<{dark:boolean}> = ({dark}) => {
	const classes = useStyles();
	return (
		<Element name="contact-us" className={classes.element}>
			<Container dark={dark}>
				<PageTitle title="Contact Us" />
				<section>
					this is contact us
				</section>
			</Container>
		</Element>
		
		
	);
};

export default ContactUs;