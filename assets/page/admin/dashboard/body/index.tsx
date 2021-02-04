import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
			marginTop:"64px",
			minHeight:`100vh`,
			flex:"1 1 100%"
		}
	});
});

const Body:React.FC = () => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			this is body
		</section>
	);
};

export default Body;