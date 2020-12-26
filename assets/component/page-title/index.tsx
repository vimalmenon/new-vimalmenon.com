import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex:"0 0 auto",
			flexDirection:"column"
		},
		title: {
			fontFamily: "Philosopher",
			fontStyle: "normal",
			fontWeight: "bold",
			fontSize: "36px",
			color: theme.palette.type==="light"?"#00172B":"#FFFFFF"
		},
		divider: {
			display:"flex",
			height: "2px",
			width: "100%",
			backgroundColor:theme.palette.type==="light"?"#00172B":"#FFFFFF",
		},
		stroke: {
			backgroundColor:"#FA2B54",
			flex: "0 0 40%",
			height: "2px",
			width: "100%",
		}
	});
});

const PageTitle:React.FC<IPageTitle> = ({title}) => {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.root}>
				<div className={classes.title}>
					{title}
				</div>
				<div className={classes.divider}>
					<span className={classes.stroke}></span>
				</div>
			</div>
		</div>
	);
};

export default PageTitle;