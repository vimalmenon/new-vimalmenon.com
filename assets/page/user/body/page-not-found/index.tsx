import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const tags = [
	"0",
	"1",
	">",
	"<",
	"404",
	"Page",
	"not",
	"found",
];

const useStyles = makeStyles((theme:Theme) => {
	const random = () => {
		switch(Math.round(Math.random()*100)%10){
		case 0|3:
			return "$float";
		case 1|4:
			return "$floatReverse";
		case 2|5:
			return "$float2";
		case 3|6:
			return "$floatReverse2";
		default:
			return "$apparition";
		}
	};
	const createChild = () => {
		const value = {};
		for(let i=1; i <81; i++) {
			const randomSecond = (Math.round(Math.random()*100)%6)+2;
			value[`& >span:nth-child(${i})`]={
				position:"absolute",
				top: `${Math.random()*100}%`,
				left: `${Math.random()*100}%`,
				filter: `blur(${Math.random()}px)`,
				fontSize: `${Math.random()*45}px`,
				animation: `${randomSecond}s ${random()} infinite`,
				animationIterationCount:"infinite",
				animationFillMode:"forwards",
				animationDuration:`${randomSecond}s`,
				zIndex:5,
			};
		}
		return {...value};
	};
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "row",
			justifyContent : "center",
		},
		container : {
			display:"flex",
			flexDirection:"row",
			flex: `1 1 100%`,
			alignItems : "center",
			margin: theme.spacing(0),
			position:"relative",
			overflow:"hidden",
			height:"70vh",
		},
		content:{
			position:"relative",
			display:"flex",
			flexDirection:"column",
			height:"70vh",
			width: "100%",
			zIndex:0,
			...createChild()
		},
		center : {
			position:"absolute",
			color: "#666",
			fontSize:"7rem",
			textShadow: "0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7)",
			zIndex:0,
			fontWeight:"bold",
			textAlign:"center",
			width:"100%"
		},
		"@keyframes apparition": {
			from:{
				opacity: 0,
				transform: "translateY(100px)"
			},
			to: {
				opacity: 1,
				transform: "translateY(0)"
			}
		},
		"@keyframes float": {
			"0%,100%" : {
				transform: "translateY(0)"
			},
			"50%": {
				transform: "translateY(180px)"
			}
		},
		"@keyframes floatReverse": {
			"0%,100%": {
				transform: "translateY(0)"
			},
			"50%": {
				transform: "translateY(-180px)"
			}
		},	
		"@keyframes float2": {
			"0%,100%": {
				transform: "translateY(0)"
			},
			"50%": {
				transform: "translateY(28px)"
			}
		},
		"@keyframes floatReverse2": {
			"0%,100%": {
				transform: "translateY(0)"
			},
			"50%": {
				transform: "translateY(-28px)"
			}
		}
	});
});
const PageNotFound:React.FC = () => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			<div className={classes.container}>
				<div className={classes.content}>
					{[...Array(80).keys()].map((value) => {
						return (<span key={value}>{tags[value%tags.length]}</span>);
					})}
					<p className={classes.center}>HTTP : 404</p>
				</div>
			</div>
		</section>
	);
};

export default React.memo(PageNotFound);