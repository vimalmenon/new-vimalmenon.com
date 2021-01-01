import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {page} from "model";

import {TextFormat} from "component";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root : {
			display:"flex",
			flex: "1 1 50%",
			flexDirection:"column",
		},
		items: {
			display:"flex",
			textIndent: "5em",
			margin:theme.spacing(2,0),
			fontSize:"1.2em",
			lineHeight:"2em"
		}
	});
});

const Message:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{page.home.aboutMe.description.map((value, key) => {
				return (
					<div key={key} className={classes.items}>
						<TextFormat text={value} />
					</div>
				);
			})}
		</div>
	);
};

export default Message;