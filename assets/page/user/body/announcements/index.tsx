import React from "react";

import {
	makeStyles,
	createStyles,
	Theme
} from "@material-ui/core/styles";
import { Container } from "component";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column"
		},
	});
});

const Announcements:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container>
				
			</Container>
		</div>
	);
};

export default Announcements;