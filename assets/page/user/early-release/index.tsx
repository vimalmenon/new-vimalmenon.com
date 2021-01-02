import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";


import {icon} from "model";
const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			position:"absolute",
			justifyContent : "center",
			zIndex:20,
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
						This website is in early release (alpha), so some features are not complete or cemented. Please be aware that some pages might be missing or some features might not work as expected.
					</span>
					<Close onClick={() => setShow(false)}/>
				</div>
			</section>
		);
	}
	return null;
};

export default EarlyRelease;