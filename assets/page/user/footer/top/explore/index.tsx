import React from "react";


import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {navigation} from "model";

import {
	NavLink
} from "react-router-dom";
import { PageTitle } from "component";

const {exploreNavigation} = navigation;

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex:"1 1 40%",
			flexDirection:"column"
		},
		title:{
			display: "flex",
		},
		content:{
			display: "flex",
			flexWrap:"wrap",
		},
		navigationItem:{
			color:"white",
			flex:"0 0 50%",
			margin:theme.spacing(1,0),
			textDecoration:"none"
		}
	});
});


const Explore:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.title}>
				<PageTitle title={"Explore"} />
			</div>
			<div className={classes.content}>
				{exploreNavigation.map((data, key) => {
					return (
						<NavLink exact key={key} to={data.url} className={classes.navigationItem}>
							{data.name}
						</NavLink>
					);
				})}
			</div>
		</div>
	);
};

export default Explore;