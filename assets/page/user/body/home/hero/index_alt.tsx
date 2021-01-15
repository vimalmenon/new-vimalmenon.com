import React from "react";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import {
	makeStyles,
	createStyles,
	Theme
} from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import clsx from "clsx";

import {pageConfig} from "model";
import Button from "./button";

const {hero}=pageConfig.home;

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column",
			height:hero.xl.height,
			position:"relative",
			zIndex:20
		},
		sliders:{
			position:"relative",
			height:"70vh",
		},
		image : {
			backgroundSize: "100% 100% !important",
			width:"100%",
			backgroundRepeat: "no-repeat, repeat",
			height:hero.xl.height,
			margin: "0 auto"
		},
		imageNavigationButton :{
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
		},
		sliderContainer :{
			width:"80%",
			height:"70vh",
			margin: "0 auto",
			display:"flex",
			flexDirection:"column",
			color:"white",
			justifyContent:"space-around"
		},
		sliderHeader : {
			fontSize:"4em",
			textAlign:"center",
			margin:theme.spacing(2,0)
		},
		sliderNavigationContent :{
			textIndent:"80px"
		},
		sliderNavigationButton :{
			textAlign:"center"
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
			<Slider>
				{sliders.map((slider, key) => {
					return (
						<Slide index={key} key={key}>
							<Image
								src={slider.image} 
								tag={"section"}
								isBgImage={true}
								hasMasterSpinner={true}
								className={classes.image}>
								<div className={classes.sliderContainer}>
									<h1 className={classes.sliderHeader}>
										{slider.title}
									</h1>
									<h2 className={classes.sliderNavigationContent}>
										{slider.description}
									</h2>
									<div className={classes.sliderNavigationButton}>
										<Button lable={slider.buttonName} />
									</div>
								</div>
							</Image>
						</Slide>
					);
				})}
			</Slider>
			<ButtonBack className={clsx(classes.imageNavigationButton, classes.backButton)}><ArrowBackIosIcon /></ButtonBack>
			<ButtonNext className={clsx(classes.imageNavigationButton, classes.forwardButton)}><ArrowForwardIosIcon /></ButtonNext>
		</CarouselProvider>
	);
};

export default HeroAlt;