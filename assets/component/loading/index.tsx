import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column",
			backgroundColor: theme.palette.background.paper,
			color: theme.palette.text.primary,
		},
	});
});

const Loading:React.FC = () => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			<CssBaseline />
			this is loading
		</section>
	);
};

export default Loading;