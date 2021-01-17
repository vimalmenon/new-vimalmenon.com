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

const {exploreNavigation} = navigation;

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex:"1 1 40%",
			flexWrap:"wrap"
		},
		navigationItem:{
			flex:"0 0 50%",
			margin:theme.spacing(1,0)
		}
	});
});


const Explore:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{exploreNavigation.map((data, key) => {
				return (
					<NavLink exact key={key} to={data.url} className={classes.navigationItem}>
						{data.name}
					</NavLink>
				);
			})}
		</div>
	);
};

export default Explore;