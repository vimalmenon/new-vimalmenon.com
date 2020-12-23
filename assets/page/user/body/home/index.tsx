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
			flex:"1 1 600px"
		},
	});
});

import Hero from "./hero";

const Home:React.FC = ()=> {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Hero />
		</div>
	);
};

export default Home;