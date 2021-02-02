import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		appBar: {
			zIndex: theme.zIndex.drawer + 1,
			transition: theme.transitions.create(["width", "margin"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		menuButton: {
			color : theme.palette.primary.contrastText,
			marginRight: 16,
		},
	});
});

const Header:React.FC = () => {
	const classes = useStyles();
	return (
		<AppBar className={clsx(classes.appBar)}>
			<Toolbar>
				<IconButton
					color="primary"
					aria-label="open drawer"
					edge="start"
					className={clsx(classes.menuButton)}>
					<MenuIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Header;