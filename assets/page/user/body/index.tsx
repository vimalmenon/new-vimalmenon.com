import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
		},
	});
});

const Body:React.FC = () => {
	const classes = useStyles();
	return(
		<section className={classes.root}>
			Website comming soon...
		</section>
	);
};

export default Body;