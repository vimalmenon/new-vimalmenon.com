import React from "react";

import {
	makeStyles,
	createStyles,
	Theme
} from "@material-ui/core/styles";
import { page } from "model";
import { PageTitle} from "component";

import {
	NavLink
} from "react-router-dom";

const {short} = page.announcements;
const useStyles = makeStyles((theme:Theme) => {
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
		},
		contentTitle:{
			display:"flex",
			margin:theme.spacing(1),
			fontSize:"1.2em",
			justifyContent:"space-between",
			"& span":{
				display:"flex"
			}
		},
		contentSmall:{
			fontSize:"0.8em",
			alignItems:"center",
			"& a":{
				color:"white"
			}
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
						<div key={key} className={classes.contentTitle}>
							<span>
								{data.title}  <span className={classes.contentSmall}>({data.date})</span>
							</span>
						</div>
					);
				})}
				<div className={classes.contentTitle}>
					<span className={classes.contentSmall}>
						<NavLink to={"/announcements"}>
							more..
						</NavLink>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Latest;