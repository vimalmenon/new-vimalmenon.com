import React from "react";

import {
	makeStyles,
	createStyles,
	Theme
} from "@material-ui/core/styles";
import { Container, PageTitle, TextFormat } from "component";

import {page, pageConfig, api} from "model";
import {ApiCaller} from "utility";

const {aboutMe} = page;
const {paragraph} = pageConfig.common;
const {AboutMeApi} = api;
const useStyles = makeStyles((theme:Theme ) => {
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
		items: {
			display:"flex",
			margin:theme.spacing(2,0),
			textIndent: paragraph.textIndent,
			fontSize:paragraph.fontSize,
			lineHeight:paragraph.lineHeight
		}
	});
});

const AboutMe:React.FC = () => {
	const classes = useStyles();
	React.useEffect(() => {
		new ApiCaller(new AboutMeApi(true))
			.getPromise()
			.then(console.log);
	}, []);
	return(		
		<Container>
			<div className={classes.root}>
				<div className={classes.title}>
					<PageTitle title={"About Me"} />
				</div>
				<div className={classes.content}>
					{aboutMe.description.map((value, key) => {
						return (
							<div key={key} className={classes.items}>
								<TextFormat text={value} />
							</div>
						);
					})}
				</div>
			</div>
		</Container>
	);
};

export default AboutMe;