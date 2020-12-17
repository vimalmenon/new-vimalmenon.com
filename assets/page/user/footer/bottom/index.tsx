import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {APP_VERSION} from "const";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			background: theme.palette.type==="light"?"#001B34":"#222323",
			justifyContent : "center",
			color: "white",
			flex: "0 0 63px",
		},
		container : {
			display:"flex",
			flexDirection:"row",
			flex:`1 1 100%`,
			alignItems : "center",
			margin:theme.spacing(0,1),
			justifyContent:"space-between",
			[theme.breakpoints.up("lg")]: {
				display:"flex",
				flex: `0 0 ${theme.breakpoints.values.lg}px`,
			},
			[theme.breakpoints.down("xs")] : {
				display:"flex",
				flexDirection:"column",
				alignItems : "inherit",
				justifyContent:"space-around"
			}
		},
		section : {
			display:"flex",
			[theme.breakpoints.down("xs")] : {
			}
		},
		footerName : {
			color:"#FA2B54"
		},
		span : {
			margin: theme.spacing(0,1)
		}
	});
});
const Bottom:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<div className={classes.section}>
					<a href={"/"} className={classes.footerName}>VimalMenon.com</a> 
					<span className={classes.span}>
						&copy; All Right Reserved - 2020
					</span>
				</div>
				<div className={classes.section}>
					<span>
						v{APP_VERSION}
					</span>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Bottom);