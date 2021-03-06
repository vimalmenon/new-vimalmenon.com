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
import ContactUs from "./contact-us";
import { MoveToTop } from "component";

const Home:React.FC = ()=> {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Hero />
			<AboutUs dark={false}/>
			<Tutorials dark={true}/>
			<ContactUs dark={false}/>
			<MoveToTop />
		</div>
	);
};

export default Home;