import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import {page} from "model";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column"
		},
		sliderWrapper : {
			position: "relative",
			height: "70vh",
			overflow: "hidden",
			"& .slide": {
				height: "70vh",
				backgroundSize: "cover !important",
				"&::before" : {
					content: "''",
					display: "block",
					position: "absolute",
					width: "100%",
					height: "100%",
					background: "linear-gradient(transparent, rgba(0, 0, 0, 0.9))",
					bottom: 0,
					left: 0,
				}
			},
			"& .previousButton":{
				display: "flex",
				position: "absolute",
				top:"50%",
				left:"50px",
				zIndex:"50",
				"& polygon" :{
					fill:"#FA2B54"
				}
			},
			"& .nextButton":{
				display: "flex",
				position: "absolute",
				top: "50%",
				right: "50px",
				zIndex:"50",
				"& polygon" :{
					fill:"#FA2B54"
				}
			}
		},
		sliderContent : {
			textAlign: "center"
		},
		inner : {
			padding: "0 70px",
			boxSizing: "border-box",
			position: "absolute",
			width: "100%",
			top: "50%",
			left: "50%",
			"transform": "translate(-50%, -50%)"
		},
		header : {
			fontWeight: 900,
			margin: "0 auto",
			maxWidth: "840px",
			color: "#FFFFFF",
			fontSize: "64px",
			lineHeight: 1,
			[theme.breakpoints.down("sm")]: {
				fontSize: "32px"
			},
			"@media (max-height: 600px)" : {
				fontSize: "32px"
			}
		},
		p : {
			color: "#FFFFFF",
			fontSize: "14px",
			lineHeight: 1.5,
			margin: "20px auto 30px",
			maxWidth: "640px"
		}
	});
});

const Hero:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Slider className={classes.sliderWrapper}>
				{page.hero.sliders.map((slider, key) => {
					return (
						<div 
							key={key}
							className={classes.sliderContent}
							style={{ background: `url('${slider.image}') no-repeat center center` }}>
							<div className={classes.inner}>
								<h1 className={classes.header}>test</h1>
								<p className={classes.p}>reading</p>
								<button>{slider.buttonName}</button>
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};

export default Hero;