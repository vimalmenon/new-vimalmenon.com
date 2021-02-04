import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";


import {pageConfig} from "model";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const {drawerWidth, drawerWidthMin} = pageConfig.admin.sidebar;

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
			whiteSpace: "nowrap",
			backgroundColor: theme.palette.primary.main,
			flexDirection : "column",
			display: "flex"
		},
		drawerOpen: {
			width: drawerWidth,      
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		drawerClose: {
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			overflowX: "hidden",
			width: drawerWidthMin,
			[theme.breakpoints.up("sm")]: {
				width: theme.spacing(8) + 1,
			},
		},
		toolbar: {
			display: "flex",
			alignItems: "center",
			justifyContent: "flex-end",
			padding:theme.spacing(0, 1),
			backgroundColor: "#0c2340",
			color:theme.palette.primary.contrastText,
			textAlign: "left",
			boxShadow: theme.shadows[4],
			...theme.mixins.toolbar,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		mobileSidebar : {
			display: "flex",
			[theme.breakpoints.up("md")]: {
				display: "none",    
			}
		},
		navigation : {
			flex : "1 1 auto"
		},
		fullHeight: {
			flex : "1 1 auto",
			"& >div" : {
				display : "flex",
				flexDirection : "column"
			}
		},
		icons : {
			color:theme.palette.primary.contrastText,
		}
	});
});

const Sidebar:React.FC = () => {
	const isOpen = useSelector<IState, boolean>((state) => state.admin.isSidebarOpen);
	const classes = useStyles();
	return (
		<Drawer
			variant="permanent"
			className={clsx(classes.drawer, {
				[classes.drawerOpen]: isOpen,
				[classes.drawerClose]: !isOpen,
			})}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: isOpen,
					[classes.drawerClose]: !isOpen
				}),
			}}>
		</Drawer>
	);
};

export default Sidebar;