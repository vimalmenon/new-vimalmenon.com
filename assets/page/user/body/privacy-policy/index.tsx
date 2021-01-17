import React from "react";

import {page} from "model";

import {TextFormat, Container, PageTitle} from "component";

import {
	makeStyles,
	createStyles,
} from "@material-ui/core/styles";

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