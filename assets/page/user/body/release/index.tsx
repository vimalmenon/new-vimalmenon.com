import React from "react";

import {
	makeStyles,
	createStyles,
	Theme
} from "@material-ui/core/styles";
import {Container, useMap, PageTitle} from "component";
import {page, pageConfig, api} from "model";
import {ApiCaller} from "utility";

const {text} = pageConfig.common;

const {ReleaseApi} = api;
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
			margin:theme.spacing(2,1)
		},
		releaseItem:{
			display: "flex",
			flexDirection:"column",
			margin:theme.spacing(1,0)
		},
		releaseHeader:{
			display:"flex",
			justifyContent:"space-between"
		},
		releaseTitle : {
			fontSize:"2em"
		},
		releaseDetails : {
			fontSize:text.fontSize,
			margin:theme.spacing(0)
		},
		releaseDetail: {
			padding:theme.spacing(1)
		}
	});
});

const Release:React.FC = () => {
	const classes = useStyles();
	const Map = useMap<any>();
	React.useEffect(() => {
		new ApiCaller<IContent>(new ReleaseApi())
			.getPromise()
			.then((data) => {
				console.log(JSON.parse(data.data));
			});
	},[]);
	return(
		<Container>
			<div className={classes.root}>
				<div className={classes.header}>
					<PageTitle title={"Release and Features"} />
				</div>
				<div className={classes.content}>
					<Map items={release} renderItem={(data, key) => {
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
								{key<2 ?
									<>
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
										<span>show less..</span>
									</>: 
									<span>show more..</span>
								}
							</div>
						);
					}}/>
				</div>
			</div>
		</Container>
	);
};

export default Release;