import React from "react";
import { useSelector } from "react-redux";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			background : "white",
			height: "50px",
			flex: "0 0 182px",
			backgroundColor:(theme.palette.type==="light")?theme.palette.background.default:"#121212"
		},
		logo : {
			width: "100%"
		}
	});
});

const Logo:React.FC = () => {
	const themeType = useSelector<IState, ThemeType>((state) => state.config.themeType);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<img src={themeType==="light"? "":" "} className={classes.logo} alt={"Vimal Menon"} />
		</div>
	);
};


export default Logo;