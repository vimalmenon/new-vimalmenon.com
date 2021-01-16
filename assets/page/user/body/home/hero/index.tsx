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

import {page} from "model";
import {scroller} from "react-scroll";

const {xl, xs, md}=pageConfig.home.hero;
const {sliders} = page.home.hero;

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column",
			height:xl.image.height,
			position:"relative",
			zIndex:20,
			[theme.breakpoints.down("sm")]: {
				height:xs.root.height,
			},
		},
		sliders:{
			position:"relative",
			height:"70vh",
		},
		image : {
			backgroundSize: "100% 100% !important",
			width:"100%",
			backgroundRepeat: "no-repeat, repeat",
			height:xl.image.height,
			margin: "0 auto",
			[theme.breakpoints.down("sm")]: {
				height:xs.image.height,
			},
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
			height:xl.image.height,
			margin: "0 auto",
			display:"flex",
			flexDirection:"column",
			color:"white",
			justifyContent:"space-around",
			[theme.breakpoints.down("sm")]: {
				width:"80%",
				height:md.image.height,
			},
			[theme.breakpoints.down("xs")]: {
				width:"80%",
				height:xs.image.height,
			},
		},
		sliderHeader : {
			fontSize:xl.title.fontSize,
			textAlign:"center",
			margin:theme.spacing(2,0),
			textShadow:xl.description.textShadow,
			[theme.breakpoints.down("sm")]: {
				textShadow:md.description.textShadow,
				fontSize:md.title.fontSize,
			},
			[theme.breakpoints.down("xs")]: {
				textShadow:xs.description.textShadow,
				fontSize:xs.title.fontSize,
			},
		},
		sliderNavigationContent :{
			textIndent:xl.description.textIndent,
			textShadow:xl.description.textShadow,
			fontSize:xl.description.fontSize,
			[theme.breakpoints.down("sm")]: {
				textShadow:md.description.textShadow,
				textIndent:md.description.textIndent,
				fontSize:md.description.fontSize,
			},
			[theme.breakpoints.down("xs")]: {
				textShadow:xs.description.textShadow,
				textIndent:xs.description.textIndent,
				fontSize:xs.description.fontSize,
			},
		},
		sliderNavigationButton :{
			textAlign:"center",
		}
	});
});


const HeroAlt:React.FC = () => {
	const classes = useStyles();
	const onNavigate = (url) => {
		scroller.scrollTo(url, {
			duration:500,
			smooth: true,
			offset:50
		});
	};
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
										<Button lable={slider.buttonName} onClick={() =>onNavigate(slider.url)}/>
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