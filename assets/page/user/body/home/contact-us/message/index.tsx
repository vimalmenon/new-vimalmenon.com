import React from "react";

import {
	makeStyles,
	createStyles,
	Theme
} from "@material-ui/core/styles";

import {TextFormat, SocialMedia} from "component";
import {page} from "model";

const {contactUs} = page.home;

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root :{
			display: "flex",
			flex:"1 1 50%",
			margin:theme.spacing(2),
			flexDirection:"column",
			justifyContent:"space-around"
		}
	});
});

const Message:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{contactUs.map((data, key) => {
				return (
					<TextFormat text={data} key={key} />
				);
			})}
			<div>
				<SocialMedia />
			</div>
			
		</div>
	);
};

export default Message;