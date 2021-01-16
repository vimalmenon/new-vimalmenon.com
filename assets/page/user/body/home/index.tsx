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

import HeroAlt from "./hero/index_alt";
import AboutUs from "./about-us";
import Tutorials from "./tutorials";
import ContactUs from "./contact-us";

const Home:React.FC = ()=> {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<HeroAlt />
			<AboutUs dark={false}/>
			<Tutorials dark={true}/>
			<ContactUs dark={false}/>
		</div>
	);
};

export default Home;