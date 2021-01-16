import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection:"column",
		},
	});
});

import Hero from "./hero";
import AboutUs from "./about-us";
import Tutorials from "./tutorials";
import Latest from "./latest";
import ContactUs from "./contact-us";

const Home:React.FC = ()=> {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Hero />
			<AboutUs dark={false}/>
			<Tutorials dark={true}/>
			<Latest dark={false}/>
			<ContactUs dark={true}/>
		</div>
	);
};

export default Home;