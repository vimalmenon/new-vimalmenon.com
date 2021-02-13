import React from "react";

import {useInitData} from "./index.service";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display:"flex",
			flex: "1 1 100%",
			flexDirection:"column"
		}
	});
});

const Tutorial:React.FC = () => {
	const [tutorials] = useInitData();
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{tutorials.map((tutorial, key) => {
				return (
					<div key={key}>
						{tutorial.name}
					</div>
				);
			})}
		</div>
	);
};

export default Tutorial;