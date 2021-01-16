import React from "react";

import {Container, PageTitle} from "component";
import {Element} from "react-scroll";

import {
	makeStyles,
	createStyles,
	Theme
} from "@material-ui/core/styles";


import Form from "./form";
import Message from "./message";

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
			[theme.breakpoints.down("md")]: {
				flexDirection:"column",
			},
		},
	});
});

const ContactUs:React.FC<IPagesProps> = ({dark}) => {
	const classes = useStyles();
	return (
		<Element name="contact-us" className={classes.element}>
			<Container dark={dark}>
				<div className={classes.title}>
					<PageTitle title="Contact Us" />
				</div>
				<div className={classes.content}>
					<Message />
					<Form />
				</div>
			</Container>
		</Element>
	);
};

export default ContactUs;