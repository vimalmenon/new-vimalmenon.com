import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display:"flex",
			margin:theme.spacing(3,0)
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