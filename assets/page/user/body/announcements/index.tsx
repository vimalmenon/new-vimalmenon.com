import React from "react";

import {
	makeStyles,
	createStyles,
	Theme
} from "@material-ui/core/styles";
import { Container, PageTitle } from "component";

import {page} from "model";

const {full} = page.announcements;
const useStyles = makeStyles((theme:Theme) => {
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
		},
		announcementContainer:{
			display: "flex",
			flexDirection: "column",
			margin:theme.spacing(2,1)
		},
		announcementTextSmall : {
			fontSize:"0.5em"
		},
		announcementTitle:{
			display: "flex",
			justifyContent:"space-between",
			alignItems:"center",
			fontSize:"2em"
		},
		announcementContent:{
			display: "flex",
			flexDirection: "column",
			fontSize:"1.2em",
			margin:theme.spacing(1,0)
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
							<div key={key} className={classes.announcementContainer}>
								<div className={classes.announcementTitle}>
									<span>
										{data.title}
									</span>
									<span className={classes.announcementTextSmall}>
										{data.date}
									</span>
								</div>
								<div className={classes.announcementContent}>
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