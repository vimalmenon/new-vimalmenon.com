import React from "react";

import {Container, PageTitle} from "component";
import {Element} from "react-scroll";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";


import Form from "./form";

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
			display: "flex",
		}
	});
});

const ContactUs:React.FC<{dark:boolean}> = ({dark}) => {
	const classes = useStyles();
	return (
		<Element name="contact-us" className={classes.element}>
			<Container dark={dark}>
				<div className={classes.title}>
					<PageTitle title="Contact Us" />
				</div>
				<div className={classes.content}>
					<div>
						this is contact us
					</div>
					<Form />
				</div>
			</Container>
		</Element>
	);
};

export default ContactUs;