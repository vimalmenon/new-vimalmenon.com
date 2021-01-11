import React from "react";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import clsx from "clsx"

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column",
			height:"70vh",
			position:"relative",
			zIndex:20
		},
		slider:{
			display:"flex",
			flexDirection:"column",
			position:"relative",
			"&::before":{
				left: "0",
				right: "0",
				bottom: "0",
				top:"0",
				content: "''",
				display: "block",
				position: "absolute",
				background: "linear-gradient(transparent,50%,rgba(0, 0, 0, 0.9))",
				zIndex:25,
				[theme.breakpoints.down("md")]: {
					//background: "linear-gradient(transparent, 70%, rgba(0, 0, 0, 0.5))"
				},
			}
		},
		image : {
			backgroundSize: "100% 100% !important",
			width:"100%",
			backgroundRepeat: "no-repeat, repeat",
			height:"65vh"
		},
		navigationButton :{
			position:"absolute",
			background:"transparent",
			borderColor: "transparent",
			top:"50%",
			zIndex:30,
			"& svg" : {
				color:"red"
			}
		},
		backButton: {
			left:"0"
		},
		forwardButton : {
			right:"0"
		}
	});
});

import {page} from "model";
const {sliders} = page.home.hero;


const HeroAlt:React.FC = () => {
	const classes = useStyles();
	return(
		<CarouselProvider
			naturalSlideWidth={100}
			naturalSlideHeight={125}
			totalSlides={3} 
			className={classes.root}>
			<Slider className={classes.slider}>
				{sliders.map((slider, key) => {
					console.log(slider);
					return (
						<Slide index={key} key={key}>
							<Image
								src={slider.image} 
								tag={"section"}
								isBgImage={true}
								hasMasterSpinner={true}
								className={classes.image}>
								<h1>
									{slider.title}
								</h1>
								<h2>
									{slider.description}
								</h2>
								<div>
								</div>
							</Image>
						</Slide>
						
					);
				})}
			</Slider>
			<ButtonBack className={clsx(classes.navigationButton, classes.backButton)}><ArrowBackIosIcon /></ButtonBack>
			<ButtonNext className={clsx(classes.navigationButton, classes.forwardButton)}><ArrowForwardIosIcon /></ButtonNext>
			<DotGroup />
		</CarouselProvider>
	);
};

export default HeroAlt;