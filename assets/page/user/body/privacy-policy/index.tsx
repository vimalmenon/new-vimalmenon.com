import React from "react";

import {page} from "model";

import {TextFormat, Container} from "component";

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
	});
});

const PrivacyPolicyPage:React.FC = () => {
	const {PrivacyPolicy} = page;
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container>
				<TextFormat 
					text={PrivacyPolicy} />
			</Container>
		</div>
	);
};

export default PrivacyPolicyPage; 