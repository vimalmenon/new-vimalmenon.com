import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Logo from "./logo";
import Navigation from "./navigation";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex: "0 0 63px",
			justifyContent : "center",
			backgroundColor:(theme.palette.type==="light")?theme.palette.background.paper:"#121212",
			position:"relative",
			zIndex:10
		},
		container : {
			display:"flex",
			flex: "1 1 100%",
			alignItems : "center",
			margin: theme.spacing(1,0),
			[theme.breakpoints.up("lg")]: {
				display:"flex",
				flex: `0 0 ${theme.breakpoints.values.lg}px`,
			},
		},
		navigation : {
			display: "flex",
			justifyContent :"flex-end",
			flex: "1 1 auto"
		},
		navigationButton : {
			display: "none",
			[theme.breakpoints.down("sm")]:{
				display: "flex",
			}
		},
	});
});
const Bottom:React.FC = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState<boolean>(false);
	return(
		<div className={classes.root}>
			<div className={classes.container}>
				<IconButton className={classes.navigationButton} onClick={() =>setOpen(!open)}>
					<MenuIcon />
				</IconButton>
				<Logo />
				<div className={classes.navigation}>
					<Navigation 
						open={open}
						setOpen={setOpen}/>
				</div>
			</div>
		</div>
	);
};

export default Bottom;