import React from "react";

import {
	makeStyles,
	createStyles,
	Theme
} from "@material-ui/core/styles";
import {Container, useMap, PageTitle} from "component";
import {page, pageConfig} from "model";

const {text} = pageConfig.common;

const {release} = page;
const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root:{
			display: "flex",
			flexDirection:"column"
		},
		header : {
			display:"flex"
		},
		content : {
			display:"flex",
			flexDirection:"column",
			margin:theme.spacing(1,0)
		},
		releaseItem:{
			display: "flex",
			flexDirection:"column"
		},
		releaseHeader:{
			display:"flex",
			justifyContent:"space-between"
		},
		releaseTitle : {
			fontSize:"2em"
		},
		releaseDetails : {
			fontSize:text.fontSize
		},
		releaseDetail: {
			padding:theme.spacing(1)
		}
	});
});

const Release:React.FC = () => {
	const classes = useStyles();
	const Map = useMap<any>();
	return(
		<Container>
			<div className={classes.root}>
				<div className={classes.header}>
					<PageTitle title={"Release and Features"} />
				</div>
				<div className={classes.content}>
					<Map items={release} renderItem={(data) => {
						return (
							<div className={classes.releaseItem}>
								<div className={classes.releaseHeader}>
									<span className={classes.releaseTitle}>
										{data.versionNo}
									</span>
									<span>
										{data.buildDate}
									</span>
								</div>
								<ul className={classes.releaseDetails}>
									<Map 
										items={data.details}
										renderItem={(detail) => {
											return (
												<li className={classes.releaseDetail}>
													{detail}
												</li>
											);
										}} />
								</ul>
							</div>
						);
					}}/>
				</div>
			</div>
		</Container>
	);
};

export default Release;