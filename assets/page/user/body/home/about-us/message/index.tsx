import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {page, pageConfig, api} from "model";
import {ApiCaller} from "utility";
import {TextFormat} from "component";

const {paragraph} = pageConfig.common;
const {aboutMe} = page;
const {AboutMeApi} = api;


const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root : {
			display:"flex",
			flex: "1 1 50%",
			flexDirection:"column",
		},
		items: {
			display:"flex",
			margin:theme.spacing(2,0),
			...paragraph,
		}
	});
});

const Message:React.FC = () => {
	const classes = useStyles();
	React.useEffect(() => {
		new ApiCaller(new AboutMeApi(true))
			.getPromise()
			.then(console.log);
	},[]);
	return (
		<div className={classes.root}>
			{aboutMe.description.map((value, key) => {
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