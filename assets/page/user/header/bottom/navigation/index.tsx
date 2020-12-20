import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {navigation} from "model";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root:{
			display: "flex",
			[theme.breakpoints.down("sm")]:{
				display: "none",
			}
		}
	});
});
const Navigation:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{navigation.mainNavigation.map((value, key) => {
				return (
					<div key={key}>
						{value.name}
					</div>
				);
			})}
		</div>
	);
};

export default Navigation;