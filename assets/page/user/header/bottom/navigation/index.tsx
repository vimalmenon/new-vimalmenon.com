import React from "react";

import {
	Theme,
	useTheme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {
	NavLink
} from "react-router-dom";

import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import {APP_VERSION} from "const";
import {navigation} from "model";

import Logo from "../logo";

import {Link} from "react-scroll";
import { useSelector } from "react-redux";


const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root:{
			display: "flex",
		},
		navigationItem:{
			display:"flex",
			justifyContent:"center",
			alignItems:"center",
			margin: theme.spacing(0,1),
			padding: theme.spacing(0,0.5),
			fontSize:"1rem",
			flexDirection:"column",
			textDecoration:"none",
			"&::after" : {
				content: "''",
				display:"inline-block",
				width:"100%",
				height:"2px",
			},
			"&:hover" : {
				"&::after" : {
					content: "''",
					display:"inline-block",
					width:"100%",
					height:"2px",
					background: "#FA2B54",
					animation: `$myEffect 300ms ${theme.transitions.easing.easeInOut}`,
				},
			},
			"&.active" : {
				//backgroundColor:"#19191A",
				color:(theme.palette.type==="light")?"black":"white",
				"&::after" : {
					content: "''",
					display:"inline-block",
					width:"100%",
					height:"2px",
					background: "#FA2B54",
					animation: `$myEffect 300ms ${theme.transitions.easing.easeInOut}`,
				},
			},
			"&:visited, &:link, &:active":{
				textDecorationColor: theme.palette.text.primary,
				color:theme.palette.text.primary,
			}
		},
		mobileNavigationItem :{
			display:"flex",
			justifyContent:"center",
			alignItems:"center",
			fontSize:"1rem",
			flexDirection:"column",
			height:"63px",
			textDecoration:"none",
			"&::after" : {
				content: "''",
				display:"inline-block",
				width:"100%",
				height:"2px",
			},
			"&:hover" : {
				"&::after" : {
					content: "''",
					display:"inline-block",
					width:"100%",
					height:"2px",
					background: "#FA2B54",
					animation: `$myEffect 300ms ${theme.transitions.easing.easeInOut}`,
				},
			},
			"&.active" : {
				color:(theme.palette.type==="light")?"black":"white",
				"&::after" : {
					content: "''",
					display:"inline-block",
					width:"100%",
					height:"2px",
					background: "#FA2B54",
					animation: `$myEffect 300ms ${theme.transitions.easing.easeInOut}`,
				},
			},
			"&:visited, &:link, &:active":{
				textDecorationColor: theme.palette.text.primary,
				color:theme.palette.text.primary,
			}
		},
		mobileSidebar : {
			display: "flex",
			[theme.breakpoints.up("md")]: {
				display: "none",    
			}
		},
		drawerPaper: {
			width: 240,
		},
		list: {
			display:"flex",
			flexDirection:"column",
			flex:"1 1 100%"
		},
		mobileLogo : {
			display:"flex",
			backgroundColor:(theme.palette.type==="light")?"#fff":"#121212",
			flex: "0 0 63px",
			justifyContent:"center",
			alignItems:"center",
			marginBottom:theme.spacing(1)
		},
		mobileNavigation : {
			display:"flex",
			flexDirection:"column",
			flex: "1 1 auto"
		},
		mobileFooter : {
			display:"flex",
			flex: "0 0 50px",
			background: theme.palette.type==="light"?"#001B34":"#222323",
			color:"white",
			justifyContent:"center",
			alignItems:"center",
			alignSelf:"flex-end",
			width:"100%"
		},
		"@keyframes myEffect": {
			"0%": {
				width:"0%"
			},
			"100%": {
				width:"100%"
			}
		},
	});
});
const Navigation:React.FC<{open:boolean, setOpen:(value:boolean) => void}> = ({open, setOpen}) => {
	const classes = useStyles();
	const theme = useTheme();
	const offSet=-20;
	const location = useSelector<IState, string>((state)=>state.config.currentLocation);
	let selectedNavigation = navigation.otherNavigation;
	if (location === "/") {
		selectedNavigation = navigation.mainNavigation;
	}
	return (
		<React.Fragment>
			<Hidden smUp implementation="css">
				<Drawer
					variant="temporary"
					anchor={theme.direction === "rtl" ? "right" : "left"}
					open={open}
					onClose={() => setOpen(!open)}
					className={classes.mobileSidebar}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true,
					}}>
					<List component="div" disablePadding className={classes.list}>
						<div className={classes.mobileLogo}>
							<Logo />
						</div>
						<div className={classes.mobileNavigation}>
							{selectedNavigation.map((value, key) => {
								if (value.inPage) {
									return (
										<Link key={key} activeClass="active" to={value.url} spy={true} smooth={true} offset={offSet} duration={500} className={classes.mobileNavigationItem}>
											<ListItem 
												button>
												<ListItemText primary={value.name} />
											</ListItem>
										</Link>
									);
								}
								return (
									<NavLink exact key={key} activeClassName="active" to={value.url} className={classes.mobileNavigationItem}>
										<ListItem 
											button>
											<ListItemText primary={value.name} />
										</ListItem>
									</NavLink>
								);
							})}
						</div>
						<div className={classes.mobileFooter}>
							v{APP_VERSION}
						</div>
					</List>
				</Drawer>
			</Hidden>
			<Hidden smDown implementation="css">
				<div className={classes.root}>
					{selectedNavigation.map((value, key) => {
						if (value.inPage) {
							return (
								<Link key={key} activeClass="active" to={value.url} spy={true} smooth={true} offset={offSet} duration={500} className={classes.navigationItem}>
									{value.name}
								</Link>
							);	
						}
						return (
							<NavLink exact key={key} activeClassName="active" to={value.url} className={classes.navigationItem}>
								<ListItem 
									button>
									<ListItemText primary={value.name} />
								</ListItem>
							</NavLink>
						);
					})}
				</div>
			</Hidden>
		</React.Fragment>
	);
};

export default Navigation;