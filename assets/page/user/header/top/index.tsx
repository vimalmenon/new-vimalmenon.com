import React from "react";

import {
	makeStyles,
	createStyles,
	Theme
} from "@material-ui/core/styles";

import {SocialMedia, ToggleTheme} from "component";


const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "row",
			background : "#00172B",
			justifyContent : "center",	
			color:"white",
			flex: "0 0 63px",
			position:"relative",
			zIndex:20
		},
		container : {
			display:"flex",
			flexDirection:"row",
			flex: `1 1 100%`,
			alignItems : "center",
			justifyContent :"flex-end",
			margin: theme.spacing(0),
			[theme.breakpoints.up("lg")]: {
				display:"flex",
				flex: `0 0 ${theme.breakpoints.values.lg}px`,
			},
		}
	});
});

const Top:React.FC = () => {
	const classes = useStyles();
	return(
		<div className={classes.root}>
			<div className={classes.container}>
				<SocialMedia />
				<ToggleTheme />
			</div>
		</div>
	);
};

export default Top;