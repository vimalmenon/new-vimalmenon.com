import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import { Container } from "component";

import {page} from "model";

const {full} = page.announcements;
const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column"
		},
	});
});

const Announcements:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container>
				{full.map((data, key) => {
					return (
						<div key={key}>
							<div>
								{data.title}
								{data.date}
							</div>
							<div>
								{data.description}
							</div>
						</div>
					);
				})}
			</Container>
		</div>
	);
};

export default Announcements;