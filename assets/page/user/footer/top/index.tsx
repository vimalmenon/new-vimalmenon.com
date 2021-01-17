import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";


import Explore from "./explore";


const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			background: theme.palette.type==="light"?"#00162A":"#191919",
			justifyContent : "center",
			color: "white"
		},
		container : {
			display:"flex",
			flexDirection:"row",
			flex: `1 1 100%`,
			margin: theme.spacing(6,1),
			[theme.breakpoints.up("lg")]: {
				flex: `0 0 ${theme.breakpoints.values.lg}px`,
			},
			[theme.breakpoints.down("sm")]: {
				flexDirection:"column",
			},
		},
		leftContent:{
			display:"flex",
			flex:"1 1 60%"
		}
	});
});
const Bottom:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<div className={classes.leftContent}>

				</div>
				<Explore />
			</div>
		</div>
	);
};

export default Bottom;