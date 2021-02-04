import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useSelector } from "react-redux";

import {toogleSidebar} from "./index.service";
import {pageConfig} from "model";

const {drawerWidth, drawerWidthMin} = pageConfig.admin.sidebar;

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		appBar: {
			width: `calc(100% - ${drawerWidthMin}px)`,
			zIndex: theme.zIndex.drawer + 1,
			transition: theme.transitions.create(["width", "margin"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appBarShift: {
			[theme.breakpoints.up("md")]: {
				marginLeft: drawerWidth,
				width: `calc(100% - ${drawerWidth}px)`,
				transition: theme.transitions.create(["width", "margin"], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				}),
			}
		},
		menuButton: {
			color : theme.palette.primary.contrastText,
			marginRight: 16,
		},
	});
});

const Header:React.FC = () => {
	const classes = useStyles();
	const isOpen = useSelector<IState, boolean>((state) => state.admin.isSidebarOpen);
	return (
		<AppBar className={clsx(classes.appBar, {[classes.appBarShift]:isOpen})}>
			<Toolbar>
				<IconButton
					color="primary"
					aria-label="open drawer"
					edge="start"
					onClick={() => toogleSidebar(isOpen)}
					className={clsx(classes.menuButton)}>
					<MenuIcon />
				</IconButton>
				<div>
					
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Header;