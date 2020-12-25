import React from "react";

import {Container} from "component";
import {Element} from "react-scroll";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) => {
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
				<section>
					this is contact us
				</section>
			</Container>
		</Element>
		
		
	);
};

export default ContactUs;