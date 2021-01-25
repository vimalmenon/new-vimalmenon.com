import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";


import {icon, page} from "model";
const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			position:"absolute",
			justifyContent : "center",
			zIndex:30,
			width:"100%",
			backgroundColor:"orange",
			opacity:0.9
		},
		container : {
			display:"flex",
			flex: "1 1 100%",
			color:"black",
			margin:theme.spacing(1),
			justifyContent:"space-between",
			[theme.breakpoints.up("lg")]: {
				display:"flex",
				flex: `0 0 ${theme.breakpoints.values.lg}px`,
			},
		}
	});
});

const EarlyRelease:React.FC = () => {
	const classes = useStyles();
	const {Close} = icon;
	const [show, setShow] = React.useState<boolean>(true);
	setTimeout(() => setShow(false),20000);
	if (show) {
		return (
			<section className={classes.root}>
				<div className={classes.container}>
					<span>
						{page.home.earlyRelease}
					</span>
					<Close onClick={() => setShow(false)}/>
				</div>
			</section>
		);
	}
	return null;
};

export default EarlyRelease;