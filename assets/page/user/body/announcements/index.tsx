import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import { Container, PageTitle } from "component";

import {page} from "model";

const {full} = page.announcements;
const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column"
		},
		title:{
			display: "flex",
		},
		content:{
			display: "flex",
			flexDirection: "column"
		}
	});
});

const Announcements:React.FC = () => {
	const classes = useStyles();
	return (
		<Container>
			<div className={classes.root}>
				<div className={classes.title}>
					<PageTitle title={"Announcements"} />
				</div>
				<div className={classes.content}>
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
				</div>
			</div>
		</Container>
	);
};

export default Announcements;