import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";



const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display:"flex",
			flex: "1 1 100%",
			flexDirection:"column"
		},
		table : {
			display:"flex",
			flex: "1 1 100%"
		}
	});
});


const Other:React.FC = () => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			this is Other
		</section>
	);
};

export default Other;