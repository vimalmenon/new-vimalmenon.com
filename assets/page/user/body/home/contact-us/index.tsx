import React from "react";

import {Container, PageTitle} from "component";
import {Element} from "react-scroll";

import {
	makeStyles,
	createStyles,
	Theme
} from "@material-ui/core/styles";

import {api} from "model";

import Form from "./form";
import Message from "./message";
import {ApiCaller} from "utility";

const {ContactApi} = api;
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
	const [data, setData] = React.useState<{title:string, data:string}>({title:"", data:""});
	React.useEffect(() => {
		new ApiCaller<{title:string, data:string}>(new ContactApi())
			.getPromise()
			.then(setData)
	},[]);
	return (
		<Element name="contact-us" className={classes.element}>
			<Container dark={dark}>
				<div className={classes.title}>
					<PageTitle title={data.title} />
				</div>
				<div className={classes.content}>
					<Message content={data.data}/>
					<Form />
				</div>
			</Container>
		</Element>
	);
};

export default ContactUs;