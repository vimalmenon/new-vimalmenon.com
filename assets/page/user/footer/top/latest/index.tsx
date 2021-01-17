import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import { page } from "model";
import { PageTitle } from "component";

const {short} = page.announcements;

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
			flex:"1 1 60%",
			flexDirection:"column"
		},
		title: {
			display:"flex"
		},
		content: {
			display:"flex",
			flexDirection:"column"
		}
	});
});

const Latest:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.title}>
				<PageTitle title={"Latest"} />
			</div>
			<div className={classes.content}>
				{short.map((data, key) => {
					return (
						<div key={key}>
							{data.title}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Latest;