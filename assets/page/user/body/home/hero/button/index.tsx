import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
	return createStyles({
		button: {
			display: "inline-block",
			padding: ".75rem 1.25rem",
			borderRadius: "10rem",
			color: "black",
			fontSize: "1rem",
			letterSpacing: ".15rem",
			transition: "all .3s",
			position: "relative",
			overflow: "hidden",
			zIndex: 1,
			"&:after" : {
				content: "''",
				position: "absolute",
				bottom: "0",
				left: "0",
				width: "100%",
				height: "100%",
				backgroundColor: "#FFFFFF",
				borderRadius: "10rem",
				zIndex: -2
			},
			"&:before": {
				content: "''",
				position: "absolute",
				bottom: "0",
				left: "0",
				width: "0%",
				height: "100%",
				backgroundColor: "#FA2B54",
				transition: "all .3s",
				borderRadius: "10rem",
				zIndex: "-1"
			},
			"&:hover": {
				color: "#fff",
				"&:before": {
					width: "100%"
				}
			}
		}
	});
});

const Button:React.FC<{lable:string}> = ({lable}) => {
	const classes = useStyles();
	return (
		<div className={classes.button}>
			{lable}
		</div>
	);
};

export default Button;