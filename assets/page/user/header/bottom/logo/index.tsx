import React from "react";
import { useSelector } from "react-redux";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {
	Link
} from "react-router-dom";

import dark from "image/logo/dark.png";
import light from "image/logo/light.png";


const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			background : "white",
			height: "50px",
			flex: "0 0 182px",
			backgroundColor:(theme.palette.type==="light")?theme.palette.background.default:"#121212"
		}
	});
});

const Logo:React.FC = () => {
	const themeType = useSelector<IState, ThemeType>((state) => state.config.themeType);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Link to={"/"}>
				<img src={themeType==="light"?light:dark} width="100%" height="100%" alt={"Vimal Menon"} />
			</Link>
		</div>
	);
};


export default Logo;