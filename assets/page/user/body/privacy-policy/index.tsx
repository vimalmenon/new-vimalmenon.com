import React from "react";

import {page, pageConfig} from "model";

import {TextFormat, Container, PageTitle} from "component";

import {
	makeStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";

const {paragraph} = pageConfig.common;

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
			flexDirection: "column",
			lineHeight:paragraph.lineHeight,
			fontSize:paragraph.fontSize,
			"& a":{
				color:theme.palette.text.primary
			}
		}
	});
});

const PrivacyPolicyPage:React.FC = () => {
	const {PrivacyPolicy} = page;
	const classes = useStyles();
	return (
		<Container>
			<div className={classes.root}>
				<div className={classes.title}>
					<PageTitle title={"Privacy Policy for Vimal Menon"} />
				</div>
				<div className={classes.content}>
					<TextFormat 
						text={PrivacyPolicy} />
				</div>
			</div>
		</Container>
	);
};

export default PrivacyPolicyPage; 